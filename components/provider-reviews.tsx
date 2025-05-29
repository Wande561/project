import { Star, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    author: "Jennifer Smith",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Sarah did an amazing job cleaning our house! Very thorough and professional. She brought all eco-friendly supplies as promised. Will definitely book again.",
    helpful: 12,
    avatar: "/placeholder.svg?height=40&width=40",
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
  },
  {
    id: 2,
    author: "Robert Johnson",
    rating: 5,
    date: "1 month ago",
    content:
      "Excellent service! Sarah was punctual, efficient, and left our home spotless. Great attention to detail and very reasonably priced.",
    helpful: 8,
    avatar: "/placeholder.svg?height=40&width=40",
    images: [],
  },
  {
    id: 3,
    author: "Maria Garcia",
    rating: 4,
    date: "1 month ago",
    content:
      "Good cleaning service overall. Sarah was professional and did a thorough job. Only minor issue was running slightly behind schedule, but she communicated well.",
    helpful: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    images: ["/placeholder.svg?height=100&width=100"],
  },
]

export function ProviderReviews() {
  return (
    <Card className="glass-card border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white">Reviews (127)</CardTitle>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-2xl font-bold text-white">4.9</span>
          </div>
          <div className="text-sm text-gray-400">Based on 127 reviews</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-700 last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src={review.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-gray-700 text-white">
                  {review.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{review.author}</h4>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-3">{review.content}</p>

                {review.images.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`Review image ${index + 1}`}
                        className="w-16 h-16 rounded-lg object-cover cursor-pointer border border-gray-700/50"
                      />
                    ))}
                  </div>
                )}

                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-400 hover:bg-gray-800">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  Helpful ({review.helpful})
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-teal-400"
        >
          View All Reviews
        </Button>
      </CardContent>
    </Card>
  )
}
