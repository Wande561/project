import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // For demo purposes, return sample notifications
    const sampleNotifications = [
      {
        id: "1",
        userId: "demo-user",
        type: "booking" as const,
        title: "New Booking Request",
        message: "Sarah Johnson wants to book your cleaning service for tomorrow at 2 PM",
        data: { bookingId: "booking1" },
        read: false,
        createdAt: new Date(),
      },
      {
        id: "2",
        userId: "demo-user",
        type: "message" as const,
        title: "New Message",
        message: "Mike Rodriguez: 'I can be there in 30 minutes for the emergency repair'",
        data: { messageId: "msg1" },
        read: false,
        createdAt: new Date(),
      },
    ]

    return NextResponse.json({ notifications: sampleNotifications })
  } catch (error) {
    console.error("Error fetching notifications:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
