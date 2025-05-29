import { Search, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "House Cleaning",
    lastMessage: "Perfect! I'll see you tomorrow at 2 PM",
    timestamp: "2 min ago",
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    service: "Plumbing",
    lastMessage: "I can be there in 30 minutes for the emergency repair",
    timestamp: "15 min ago",
    unread: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
  },
  {
    id: 3,
    name: "Emma Chen",
    service: "Personal Training",
    lastMessage: "Great workout today! Same time next week?",
    timestamp: "1 hour ago",
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    online: false,
  },
  {
    id: 4,
    name: "David Wilson",
    service: "Electrical Work",
    lastMessage: "The electrical panel installation is complete",
    timestamp: "3 hours ago",
    unread: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    online: false,
  },
]

export function MessagesList() {
  return (
    <Card className="glass-card border-gray-700/50 h-full">
      <CardHeader>
        <CardTitle className="text-white">Messages</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search conversations..."
            className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center space-x-3 p-4 hover:bg-gray-800/50 cursor-pointer transition-colors"
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gray-700 text-white">
                    {conversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-white truncate">{conversation.name}</h4>
                  <span className="text-xs text-gray-400">{conversation.timestamp}</span>
                </div>
                <p className="text-sm text-gray-300 mb-1">{conversation.service}</p>
                <p className="text-sm text-gray-400 truncate">{conversation.lastMessage}</p>
              </div>

              <div className="flex flex-col items-end space-y-1">
                {conversation.unread > 0 && (
                  <Badge className="bg-teal-600 text-white text-xs">{conversation.unread}</Badge>
                )}
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-teal-400">
                  <MoreVertical className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
