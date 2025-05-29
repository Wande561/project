"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Camera, Star, Calendar, DollarSign, BarChart3, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const galleryImages = [
  "/placeholder.svg?height=200&width=200",
  "/placeholder.svg?height=200&width=200",
  "/placeholder.svg?height=200&width=200",
  "/placeholder.svg?height=200&width=200",
  "/placeholder.svg?height=200&width=200",
  "/placeholder.svg?height=200&width=200",
]

const recentReviews = [
  {
    id: 1,
    author: "Jennifer Smith",
    rating: 5,
    date: "2 weeks ago",
    content: "Sarah did an amazing job cleaning our house! Very thorough and professional.",
  },
  {
    id: 2,
    author: "Robert Johnson",
    rating: 5,
    date: "1 month ago",
    content: "Excellent service! Sarah was punctual, efficient, and left our home spotless.",
  },
  {
    id: 3,
    author: "Maria Garcia",
    rating: 4,
    date: "1 month ago",
    content: "Good cleaning service overall. Sarah was professional and did a thorough job.",
  },
]

export default function ProviderAccountPage() {
  const [acceptingClients, setAcceptingClients] = useState(true)

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Provider Profile */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-gray-700/50">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" />
                      <AvatarFallback className="bg-gray-700 text-white text-2xl">SJ</AvatarFallback>
                    </Avatar>
                    <Button size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-600 hover:bg-teal-700">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-4 mb-1">Sarah Johnson</h2>
                  <p className="text-gray-300 mb-2">Professional House Cleaning</p>
                  <Badge className="bg-teal-600 text-white">Verified Provider</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <Label htmlFor="availability" className="text-white font-medium">
                        Accepting New Clients
                      </Label>
                      <p className="text-sm text-gray-400">Toggle your availability status</p>
                    </div>
                    <Switch id="availability" checked={acceptingClients} onCheckedChange={setAcceptingClients} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-bold text-white">4.9</span>
                      </div>
                      <p className="text-xs text-gray-400">Rating</p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg">
                      <p className="font-bold text-white">127</p>
                      <p className="text-xs text-gray-400">Reviews</p>
                    </div>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card border-gray-700/50 mt-6">
              <CardHeader>
                <CardTitle className="text-white text-lg">This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-teal-400 mr-2" />
                    <span className="text-gray-300">Bookings</span>
                  </div>
                  <span className="font-bold text-white">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-teal-400 mr-2" />
                    <span className="text-gray-300">Earnings</span>
                  </div>
                  <span className="font-bold text-white">$2,340</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 text-teal-400 mr-2" />
                    <span className="text-gray-300">Response Rate</span>
                  </div>
                  <span className="font-bold text-white">98%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Gallery */}
            <Card className="glass-card border-gray-700/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Work Gallery</CardTitle>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Camera className="h-4 w-4 mr-2" />
                  Add Photos
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-700/50 group"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Work sample ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <Card className="glass-card border-gray-700/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Recent Reviews</CardTitle>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {recentReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{review.author}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{review.content}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="glass-card border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white">Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Settings className="h-4 w-4 mr-2" />
                    Service Settings
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Pricing & Rates
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Calendar className="h-4 w-4 mr-2" />
                    Availability
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
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
