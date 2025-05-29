import { Star, MapPin, Clock, Shield, Award, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProviderProfile() {
  return (
    <Card className="glass-card border-gray-700/50">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Sarah Johnson"
              className="w-32 h-32 rounded-2xl object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">Sarah Johnson</h1>
                <p className="text-lg text-gray-300 mb-2">Professional House Cleaning</p>

                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-white">4.9</span>
                    <span className="text-gray-400">(127 reviews)</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Seattle, WA</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-400 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Typically responds within 30 minutes</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Share Profile
                </Button>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-teal-600 text-white">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
              <Badge className="bg-yellow-600 text-white">
                <Award className="h-3 w-3 mr-1" />
                Top Rated
              </Badge>
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                Eco-friendly
              </Badge>
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                Same-day service
              </Badge>
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                Insured
              </Badge>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-white mb-2">About</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional house cleaning service with over 8 years of experience. I specialize in eco-friendly
                cleaning solutions and provide thorough, reliable service. My goal is to give you more time to focus on
                what matters most while ensuring your home is spotless and healthy.
              </p>
            </div>
          </div>
        </div>

        {/* Services & Pricing */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="font-semibold text-white mb-4">Services & Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h4 className="font-medium text-white mb-1">Standard Cleaning</h4>
              <p className="text-sm text-gray-400 mb-2">Regular maintenance cleaning</p>
              <p className="font-semibold text-teal-400">$45/hour</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h4 className="font-medium text-white mb-1">Deep Cleaning</h4>
              <p className="text-sm text-gray-400 mb-2">Comprehensive detailed cleaning</p>
              <p className="font-semibold text-teal-400">$65/hour</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
