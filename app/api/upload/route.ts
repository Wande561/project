import { type NextRequest, NextResponse } from "next/server"
import { handleFileUpload } from "@/lib/upload"
import { verifyToken } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const user = await verifyToken(request)
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const uploadedUrls = await handleFileUpload(request)

    return NextResponse.json({ urls: uploadedUrls })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Failed to upload files" }, { status: 500 })
  }
}
