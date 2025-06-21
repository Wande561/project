import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { verifyToken } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const user = await verifyToken(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const conversations = await db.getConversationsByUser(user.userId)
    return NextResponse.json({ conversations })
  } catch (error) {
    console.error("Error fetching conversations:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await verifyToken(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { receiverId, content, type = "text", conversationId } = body

    let finalConversationId = conversationId

    // Create conversation if it doesn't exist
    if (!conversationId) {
      const conversation = await db.createConversation([user.userId, receiverId])
      finalConversationId = conversation.id
    }

    const message = await db.createMessage({
      conversationId: finalConversationId,
      senderId: user.userId,
      receiverId,
      content,
      type,
      metadata: body.metadata,
    })

    // Create notification for receiver
    await db.createNotification({
      userId: receiverId,
      type: "message",
      title: "New Message",
      message: "You have received a new message",
      data: { messageId: message.id, conversationId: finalConversationId },
      read: false,
    })

    return NextResponse.json({ message })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
