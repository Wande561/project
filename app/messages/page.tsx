import { Navigation } from "@/components/navigation"
import { MessagesList } from "@/components/messages-list"
import { ChatWindow } from "@/components/chat-window"

export default function MessagesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <MessagesList />
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  )
}
