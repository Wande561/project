import { Navigation } from "@/components/navigation"
import { Bell, MessageCircle, Calendar, Star, DollarSign, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const notifications = [
  {
    id: 1,
    type: "booking",
    icon: Calendar,
    title: "New Booking Request",
    message: "Sarah Johnson wants to book your cleaning service for tomorrow at 2 PM",
    time: "5 minutes ago",
    unread: true,
    action: "View Booking",
  },
  {
    id: 2,
    type: "message",
    icon: MessageCircle,
    title: "New Message",
    message: "Mike Rodriguez: 'I can be there in 30 minutes for the emergency repair'",
    time: "15 minutes ago",
    unread: true,
    action: "Reply",
  },
  {
    id: 3,
    type: "review",
    icon: Star,
    title: "New Review",
    message: "Jennifer Smith left you a 5-star review for house cleaning service",
    time: "1 hour ago",
    unread: false,
    action: "View Review",
  },
  {
    id: 4,
    type: "payment",
    icon: DollarSign,
    title: "Payment Received",
    message: "You received $135 for cleaning service completed on March 15",
    time: "2 hours ago",
    unread: false,
    action: "View Details",
  },
  {
    id: 5,
    type: "system",
    icon: Bell,
    title: "Profile Verification Complete",
    message: "Your provider profile has been successfully verified",
    time: "1 day ago",
    unread: false,
    action: null,
  },
]

export default function NotificationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
            <p className="text-gray-300">Stay updated with your latest activities</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Mark All Read
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`glass-card border-gray-700/50 ${notification.unread ? "border-teal-500/30" : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.type === "booking"
                        ? "bg-blue-600"
                        : notification.type === "message"
                          ? "bg-green-600"
                          : notification.type === "review"
                            ? "bg-yellow-600"
                            : notification.type === "payment"
                              ? "bg-teal-600"
                              : "bg-gray-600"
                    }`}
                  >
                    <notification.icon className="h-5 w-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-white flex items-center">
                        {notification.title}
                        {notification.unread && <Badge className="ml-2 bg-teal-600 text-white text-xs">New</Badge>}
                      </h3>
                      <span className="text-sm text-gray-400">{notification.time}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{notification.message}</p>
                    {notification.action && (
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                        {notification.action}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
