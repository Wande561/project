import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, role, businessName, categories, location } = body

    // Check if user already exists
    const existingUser = await db.getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Create user
    if (role === "provider") {
      const provider = await db.createProvider({
        email,
        name,
        role: "provider",
        businessName: businessName || name,
        description: "",
        categories: categories || [],
        location: location || {
          address: "",
          city: "",
          state: "",
          zipCode: "",
          coordinates: { lat: 0, lng: 0 },
        },
        pricing: { hourlyRate: 0, fixedPrices: [] },
        availability: {
          isAcceptingClients: true,
          schedule: {
            monday: { start: "09:00", end: "17:00", available: true },
            tuesday: { start: "09:00", end: "17:00", available: true },
            wednesday: { start: "09:00", end: "17:00", available: true },
            thursday: { start: "09:00", end: "17:00", available: true },
            friday: { start: "09:00", end: "17:00", available: true },
            saturday: { start: "10:00", end: "15:00", available: false },
            sunday: { start: "10:00", end: "15:00", available: false },
          },
        },
        gallery: [],
        rating: 0,
        reviewCount: 0,
        verified: false,
        joinedAt: new Date(),
      })

      return NextResponse.json({
        user: provider,
        token: `demo-token-${provider.id}`,
      })
    } else {
      const user = await db.createUser({
        email,
        name,
        role: "client",
      })

      return NextResponse.json({
        user,
        token: `demo-token-${user.id}`,
      })
    }
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
