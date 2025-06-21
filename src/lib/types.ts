export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  phone?: string
  createdAt: Date
  updatedAt: Date
  role: "client" | "provider"
}

export interface Provider extends User {
  role: "provider"
  businessName: string
  description: string
  categories: string[]
  location: {
    address: string
    city: string
    state: string
    zipCode: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  pricing: {
    hourlyRate?: number
    fixedPrices?: { service: string; price: number }[]
  }
  availability: {
    isAcceptingClients: boolean
    schedule: {
      [key: string]: { start: string; end: string; available: boolean }
    }
  }
  gallery: string[]
  rating: number
  reviewCount: number
  verified: boolean
  joinedAt: Date
}

export interface Service {
  id: string
  providerId: string
  title: string
  description: string
  category: string
  subcategory?: string
  price: number
  duration: number
  images: string[]
  tags: string[]
  isActive: boolean
  createdAt: Date
}

export interface Booking {
  id: string
  clientId: string
  providerId: string
  serviceId: string
  status: "pending" | "confirmed" | "in-progress" | "completed" | "cancelled"
  scheduledDate: Date
  duration: number
  totalPrice: number
  location: {
    address: string
    coordinates: { lat: number; lng: number }
  }
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  bookingId: string
  clientId: string
  providerId: string
  rating: number
  comment: string
  images?: string[]
  createdAt: Date
}

export interface Message {
  id: string
  conversationId: string
  senderId: string
  receiverId: string
  content: string
  type: "text" | "image" | "booking"
  metadata?: any
  readAt?: Date
  createdAt: Date
}

export interface Conversation {
  id: string
  participants: string[]
  lastMessage?: Message
  updatedAt: Date
  createdAt: Date
}

export interface Notification {
  id: string
  userId: string
  type: "booking" | "message" | "review" | "payment" | "system"
  title: string
  message: string
  data?: any
  read: boolean
  createdAt: Date
}
