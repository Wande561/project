import { Star, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredServices = [
  {
    id: 1,
    title: "Emergency Plumbing Repair",
    provider: "Mike Rodriguez",
    rating: 4.8,
    reviews: 89,
    price: "$75/hour",
    location: "1.8 miles away",
    image: "/placeholder.svg?height=200&width=300",
    urgent: true,
    available: "Available now",
  },
  {
    id: 2,
    title: "Deep House Cleaning",
    provider: "Sarah Johnson",
    rating: 4.9,
    reviews: 127,
    price: "$65/hour",
    location: "2.3 miles away",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    available: "Next available: Today 3 PM",
  },
  {
    id: 3,
    title: "Personal Training Session",
    provider: "Emma Chen",
    rating: 5.0,
    reviews: 156,
    price: "$60/session",
    location: "0.9 miles away",
    image: "/placeholder.svg?height=200&width=300",
    urgent: false,
    available: "Next available: Tomorrow 8 AM",
  },
]

export function FeaturedServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredServices.map((service) => (
        <Card
          key={service.id}
          className="glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer group border-gray-700/50 hover:border-teal-500/50"
        >
          <CardContent className="p-0">
            <div className="relative">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {service.urgent && <Badge className="absolute top-3 left-3 bg-red-500 text-white">Urgent</Badge>}
              <Badge className="absolute top-3 right-3 bg-green-500 text-white">Available</Badge>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-2">by {service.provider}</p>

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{service.rating}</span>
                  <span className="text-sm text-gray-400">({service.reviews})</span>
                </div>
                <span className="font-semibold text-teal-400">{service.price}</span>
              </div>

              <div className="flex items-center text-sm text-gray-400 mb-2">
                <MapPin className="h-3 w-3 mr-1" />
                {service.location}
              </div>

              <div className="flex items-center text-sm text-gray-400 mb-3">
                <Clock className="h-3 w-3 mr-1" />
                {service.available}
              </div>

              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Book Now</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
