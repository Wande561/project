import type { User, Provider, Service, Booking, Review, Message, Conversation, Notification } from "./types"

// Simple browser-compatible database implementation
class MockDatabase {
  \
  private users: Map<string, User> = new Map();
  \
  private providers: Map<string, Provider> = new Map();
  \
  private services: Map<string, Service> = new Map();
  \
  private bookings: Map<string, Booking> = new Map();
  \
  private reviews: Map[string
  ,
  Review;
  ] = new
  Map()
  private messages: Map[string
  ,
  Message;
  ] = new
  Map()
  private conversations: Map[string
  ,
  Conversation;
  ] = new
  Map()
  private notifications: Map[string
  ,
  Notification;
  ] = new
  Map()

  constructor() {
    this.seedData()
  }

  // Users
  async createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
    const user: User = {
      ...userData,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.users.set(user.id, user)
    return user
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.get(id) || null
  }

  async getUserByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) return user
    }
    return null
  }

  // Providers
  async createProvider(providerData: Omit<Provider, "id" | "createdAt" | "updatedAt">): Promise<Provider> {
    const provider: Provider = {
      ...providerData,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.providers.set(provider.id, provider)
    this.users.set(provider.id, provider)
    return provider
  }

  async getProviderById(id: string): Promise<Provider | null> {
    return this.providers.get(id) || null
  }

  async getProvidersByCategory(category: string, limit = 10): Promise<Provider[]> {
    const providers = Array.from(this.providers.values())
      .filter((p) => p.categories.includes(category))
      .slice(0, limit)
    return providers
  }

  async searchProviders(query: string, category?: string, location?: string): Promise<Provider[]> {
    const providers = Array.from(this.providers.values())
    return providers.filter((provider) => {
      const matchesQuery =
        !query ||
        provider.businessName.toLowerCase().includes(query.toLowerCase()) ||
        provider.description.toLowerCase().includes(query.toLowerCase())

      const matchesCategory = !category || provider.categories.includes(category)

      const matchesLocation =
        !location ||
        provider.location.city.toLowerCase().includes(location.toLowerCase()) ||
        provider.location.state.toLowerCase().includes(location.toLowerCase())

      return matchesQuery && matchesCategory && matchesLocation
    })
  }

  // Services
  async createService(serviceData: Omit<Service, "id" | "createdAt">): Promise<Service> {
    const service: Service = {
      ...serviceData,
      id: this.generateId(),
      createdAt: new Date(),
    }
    this.services.set(service.id, service)
    return service
  }

  async getServicesByProvider(providerId: string): Promise<Service[]> {
    return Array.from(this.services.values()).filter((s) => s.providerId === providerId)
  }

  // Bookings
  async createBooking(bookingData: Omit<Booking, "id" | "createdAt" | "updatedAt">): Promise<Booking> {
    const booking: Booking = {
      ...bookingData,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.bookings.set(booking.id, booking)
    return booking
  }

  async getBookingsByUser(userId: string): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter((b) => b.clientId === userId || b.providerId === userId)
  }

  async updateBookingStatus(bookingId: string, status: Booking["status"]): Promise<Booking | null> {
    const booking = this.bookings.get(bookingId)
    if (booking) {
      booking.status = status
      booking.updatedAt = new Date()
      this.bookings.set(bookingId, booking)
    }
    return booking || null
  }

  // Reviews
  async createReview(reviewData: Omit<Review, "id" | "createdAt">): Promise<Review> {
    const review: Review = {
      ...reviewData,
      id: this.generateId(),
      createdAt: new Date(),
    }
    this.reviews.set(review.id, review)

    // Update provider rating
    await this.updateProviderRating(review.providerId)

    return review
  }

  async getReviewsByProvider(providerId: string): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter((r) => r.providerId === providerId)
  }

  private async updateProviderRating(providerId: string): Promise<void> {
    const provider = this.providers.get(providerId)
    if (!provider) return

    const reviews = await this.getReviewsByProvider(providerId)
    if (reviews.length === 0) return

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
    provider.rating = totalRating / reviews.length
    provider.reviewCount = reviews.length

    this.providers.set(providerId, provider)
  }

  // Messages
  async createMessage(messageData: Omit<Message, "id" | "createdAt">): Promise<Message> {
    const message: Message = {
      ...messageData,
      id: this.generateId(),
      createdAt: new Date(),
    }
    this.messages.set(message.id, message)

    // Update conversation
    await this.updateConversation(message.conversationId, message)

    return message
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter((m) => m.conversationId === conversationId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
  }

  // Conversations
  async createConversation(participants: string[]): Promise<Conversation> {
    const conversation: Conversation = {
      id: this.generateId(),
      participants,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.conversations.set(conversation.id, conversation)
    return conversation
  }

  async getConversationsByUser(userId: string): Promise<Conversation[]> {
    return Array.from(this.conversations.values())
      .filter((c) => c.participants.includes(userId))
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
  }

  private async updateConversation(conversationId: string, lastMessage: Message): Promise<void> {
    const conversation = this.conversations.get(conversationId)
    if (conversation) {
      conversation.lastMessage = lastMessage
      conversation.updatedAt = new Date()
      this.conversations.set(conversationId, conversation)
    }
  }

  // Notifications
  async createNotification(notificationData: Omit<Notification, "id" | "createdAt">): Promise<Notification> {
    const notification: Notification = {
      ...notificationData,
      id: this.generateId(),
      createdAt: new Date(),
    }
    this.notifications.set(notification.id, notification)
    return notification
  }

  async getNotificationsByUser(userId: string): Promise<Notification[]> {
    return Array.from(this.notifications.values())
      .filter((n) => n.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  async markNotificationAsRead(notificationId: string): Promise<void> {
    const notification = this.notifications.get(notificationId)
    if (notification) {
      notification.read = true
      this.notifications.set(notificationId, notification)
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }

  private seedData(): void {
    // Seed some sample data
    const sampleProviders: Provider[] = [
      {
        id: "provider1",
        email: "sarah@example.com",
        name: "Sarah Johnson",
        role: "provider",
        businessName: "Sarah's Cleaning Services",
        description: "Professional house cleaning and maintenance services with over 8 years of experience.",
        categories: ["home-services", "cleaning"],
        location: {
          address: "123 Main St",
          city: "Seattle",
          state: "WA",
          zipCode: "98101",
          coordinates: { lat: 47.6062, lng: -122.3321 },
        },
        pricing: {
          hourlyRate: 45,
          fixedPrices: [
            { service: "Deep Clean", price: 150 },
            { service: "Regular Clean", price: 80 },
          ],
        },
        availability: {
          isAcceptingClients: true,
          schedule: {
            monday: { start: "09:00", end: "17:00", available: true },
            tuesday: { start: "09:00", end: "17:00", available: true },
            wednesday: { start: "09:00", end: "17:00", available: true },
            thursday: { start: "09:00", end: "17:00", available: true },
            friday: { start: "09:00", end: "17:00", available: true },
            saturday: { start: "10:00", end: "15:00", available: true },
            sunday: { start: "10:00", end: "15:00", available: false },
          },
        },
        gallery: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
        rating: 4.9,
        reviewCount: 127,
        verified: true,
        joinedAt: new Date("2023-01-15"),
        createdAt: new Date("2023-01-15"),
        updatedAt: new Date(),
      },
      {
        id: "provider2",
        email: "mike@example.com",
        name: "Mike Rodriguez",
        role: "provider",
        businessName: "Rodriguez Plumbing",
        description: "Emergency plumbing services available 24/7. Licensed and insured.",
        categories: ["repairs-maintenance", "plumbing"],
        location: {
          address: "456 Oak Ave",
          city: "Seattle",
          state: "WA",
          zipCode: "98102",
          coordinates: { lat: 47.6205, lng: -122.3493 },
        },
        pricing: {
          hourlyRate: 75,
          fixedPrices: [
            { service: "Drain Cleaning", price: 120 },
            { service: "Pipe Repair", price: 200 },
          ],
        },
        availability: {
          isAcceptingClients: true,
          schedule: {
            monday: { start: "08:00", end: "18:00", available: true },
            tuesday: { start: "08:00", end: "18:00", available: true },
            wednesday: { start: "08:00", end: "18:00", available: true },
            thursday: { start: "08:00", end: "18:00", available: true },
            friday: { start: "08:00", end: "18:00", available: true },
            saturday: { start: "09:00", end: "17:00", available: true },
            sunday: { start: "09:00", end: "17:00", available: true },
          },
        },
        gallery: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
        rating: 4.8,
        reviewCount: 89,
        verified: true,
        joinedAt: new Date("2023-02-20"),
        createdAt: new Date("2023-02-20"),
        updatedAt: new Date(),
      },
    ]

    sampleProviders.forEach((provider) => {
      this.providers.set(provider.id, provider)
      this.users.set(provider.id, provider)
    })

    // Add sample reviews
    const sampleReviews: Review[] = [
      {
        id: "review1",
        bookingId: "booking1",
        clientId: "client1",
        providerId: "provider1",
        rating: 5,
        comment: "Sarah did an amazing job cleaning our house! Very thorough and professional.",
        createdAt: new Date("2024-01-15"),
      },
      {
        id: "review2",
        bookingId: "booking2",
        clientId: "client2",
        providerId: "provider1",
        rating: 5,
        comment: "Excellent service! Sarah was punctual, efficient, and left our home spotless.",
        createdAt: new Date("2024-01-10"),
      },
    ]

    sampleReviews.forEach((review) => {
      this.reviews.set(review.id, review)
    })
  }
}

export const db = new MockDatabase()
