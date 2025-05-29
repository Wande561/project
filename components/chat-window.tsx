"use client"

import { useState } from "react"
import { Send, Paperclip, ImageIcon, Phone, Video, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content:
      "Hi! I received your booking request for house cleaning. I can confirm the appointment for tomorrow at 2 PM.",
    timestamp: "10:30 AM",
    isOwn: false,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    sender: "You",
    content: "Perfect! Just to confirm, you'll bring all the cleaning supplies?",
    timestamp: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content: "Yes, I bring all eco-friendly supplies. Is there anything specific you'd like me to focus on?",
    timestamp: "10:35 AM",
    isOwn: false,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    sender: "You",
    content: "The kitchen needs extra attention, especially the oven. Also, here's a photo of the current state:",
    timestamp: "10:37 AM",
    isOwn: true,
  },
  {
    id: 5,
    sender: "You",
    content: "",
    timestamp: "10:37 AM",
    isOwn: true,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ChatWindow() {
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("")
    }
  }

  return (
    <Card className="glass-card border-gray-700/50 h-full flex flex-col">
      {/* Chat Header */}
      <CardHeader className="border-b border-gray-700 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-gray-700 text-white">SJ</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-white">Sarah Johnson</h3>
              <p className="text-sm text-gray-400">Online • Responds quickly</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
              <Video className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                <DropdownMenuItem className="text-gray-300 hover:text-teal-400 hover:bg-gray-700">
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-teal-400 hover:bg-gray-700">
                  Block User
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-teal-400 hover:bg-gray-700">
                  Report
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      {/* Messages */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              {!message.isOwn && (
                <Avatar className="w-8 h-8">
                  <AvatarImage src={message.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gray-700 text-white">SJ</AvatarFallback>
                </Avatar>
              )}

              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.isOwn ? "bg-teal-600 text-white" : "bg-gray-700 text-gray-100"
                }`}
              >
                {message.image ? (
                  <img
                    src={message.image || "/placeholder.svg"}
                    alt="Shared image"
                    className="rounded-lg max-w-full h-auto"
                  />
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
                <p className={`text-xs mt-1 ${message.isOwn ? "text-teal-100" : "text-gray-400"}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>

      {/* Message Input */}
      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
            <ImageIcon className="h-4 w-4" />
          </Button>

          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
          />

          <Button onClick={handleSendMessage} className="bg-teal-600 hover:bg-teal-700 text-white" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
