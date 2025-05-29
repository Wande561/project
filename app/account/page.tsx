import { Navigation } from "@/components/navigation"
import { User, CreditCard, Shield, Bell, HelpCircle, LogOut } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const accountSections = [
  {
    title: "Profile Settings",
    icon: User,
    description: "Manage your personal information and preferences",
    href: "/account/profile",
  },
  {
    title: "Payment Methods",
    icon: CreditCard,
    description: "Add or update your payment information",
    href: "/account/payments",
  },
  {
    title: "Security",
    icon: Shield,
    description: "Password, two-factor authentication, and privacy",
    href: "/account/security",
  },
  {
    title: "Notifications",
    icon: Bell,
    description: "Control what notifications you receive",
    href: "/account/notifications",
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    description: "Get help or contact customer support",
    href: "/account/support",
  },
]

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-gray-700/50">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback className="bg-gray-700 text-white text-2xl">JD</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-white mb-1">John Doe</h2>
                <p className="text-gray-300 mb-2">john.doe@email.com</p>
                <Badge className="bg-teal-600 text-white mb-4">Verified Client</Badge>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Member since</span>
                    <span className="text-white">March 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total bookings</span>
                    <span className="text-white">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reviews given</span>
                    <span className="text-white">8</span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white">Edit Profile</Button>
              </CardContent>
            </Card>
          </div>

          {/* Account Settings */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-white mb-8">Account Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accountSections.map((section) => (
                <Card
                  key={section.title}
                  className="glass-card border-gray-700/50 hover:border-teal-500/50 cursor-pointer transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <section.icon className="h-5 w-5 mr-3 text-teal-400" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{section.description}</p>
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      Manage
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="glass-card border-gray-700/50 mt-8">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    View Booking History
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Download Data
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-900/20">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
