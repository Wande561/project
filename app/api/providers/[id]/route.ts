import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const provider = await db.getProviderById(params.id)

    if (!provider) {
      return NextResponse.json({ error: "Provider not found" }, { status: 404 })
    }

    // Get provider's services and reviews
    const services = await db.getServicesByProvider(params.id)
    const reviews = await db.getReviewsByProvider(params.id)

    return NextResponse.json({
      provider,
      services,
      reviews,
    })
  } catch (error) {
    console.error("Error fetching provider:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
