import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const galleryImages = [
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
]

export function ProviderGallery() {
  return (
    <Card className="glass-card border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white">Work Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-gray-700/50"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Work sample ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
