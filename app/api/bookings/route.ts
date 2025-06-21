import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    // For demo purposes, return empty bookings
    return NextResponse.json({ bookings: [] })
  } catch (error) {
    console.error("Error fetching bookings:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { providerId, serviceId, scheduledDate, duration, totalPrice, location, notes } = body

    const booking = await db.createBooking({
      clientId: "demo-client",
      providerId,
      serviceId,
      status: "pending",
      scheduledDate: new Date(scheduledDate),
      duration,
      totalPrice,
      location,
      notes,
    })

    return NextResponse.json({ booking })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
