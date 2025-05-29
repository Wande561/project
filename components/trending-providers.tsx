import { Star, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const providers = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "House Cleaning",
    rating: 4.9,
    reviews: 127,
    price: "$45/hour",
    location: "2.3 miles away",
    image: "/placeholder.svg?height=200&width=200",
    verified: true,
    responseTime: "~30 min",
    tags: ["Eco-friendly", "Same-day"],
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    service: "Plumbing",
    rating: 4.8,
    reviews: 89,
    price: "$75/hour",
    location: "1.8 miles away",
    image: "/placeholder.svg?height=200&width=200",
    verified: true,
    responseTime: "~15 min",
    tags: ["Emergency", "24/7"],
  },
  {
    id: 3,
    name: "Emma Chen",
    service: "Personal Training",
    rating: 5.0,
    reviews: 156,
    price: "$60/session",
    location: "0.9 miles away",
    image: "/placeholder.svg?height=200&width=200",
    verified: true,
    responseTime: "~45 min",
    tags: ["Certified", "Nutrition"],
  },
  {
    id: 4,
    name: "David Wilson",
    service: "Electrical Work",
    rating: 4.7,
    reviews: 203,
    price: "$85/hour",
    location: "3.1 miles away",
    image: "/placeholder.svg?height=200&width=200",
    verified: true,
    responseTime: "~20 min",
    tags: ["Licensed", "Insured"],
  },
]

export function TrendingProviders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {providers.map((provider) => (
        <Card
          key={provider.id}
          className="glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer group border-gray-700/50 hover:border-teal-500/50"
        >
          <CardContent className="p-0">
            <div className="relative">
              <img
                src={provider.image || "/placeholder.svg"}
                alt={provider.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {provider.verified && <Badge className="absolute top-3 right-3 bg-teal-600 text-white">Verified</Badge>}
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">{provider.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{provider.rating}</span>
                  <span className="text-sm text-gray-400">({provider.reviews})</span>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-2">{provider.service}</p>

              <div className="flex items-center text-sm text-gray-400 mb-2">
                <MapPin className="h-3 w-3 mr-1" />
                {provider.location}
              </div>

              <div className="flex items-center text-sm text-gray-400 mb-3">
                <Clock className="h-3 w-3 mr-1" />
                Responds {provider.responseTime}
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {provider.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-teal-400">{provider.price}</span>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
