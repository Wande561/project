import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const query = searchParams.get("q")
    const location = searchParams.get("location")
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    let providers

    if (query || category || location) {
      providers = await db.searchProviders(query || "", category || undefined, location || undefined)
    } else if (category) {
      providers = await db.getProvidersByCategory(category, limit)
    } else {
      // Get all providers
      providers = await db.searchProviders("")
    }

    return NextResponse.json({ providers })
  } catch (error) {
    console.error("Error fetching providers:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
