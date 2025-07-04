import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Simple middleware without JWT verification
  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*"],
}
