// Simple auth utility without JWT dependencies
export interface TokenPayload {
  userId: string
  email: string
  role: "client" | "provider"
}

export function parseToken(token: string): TokenPayload | null {
  try {
    // For demo purposes, extract user ID from token
    const userId = token.replace("demo-token-", "")
    return {
      userId,
      email: "demo@example.com",
      role: "client",
    }
  } catch (error) {
    return null
  }
}

export function generateToken(userId: string): string {
  return `demo-token-${userId}`
}
