import { Navigation } from "@/components/navigation"
import { TrendingProviders } from "@/components/trending-providers"
import { SearchSection } from "@/components/search-section"
import { Scissors, Sparkles, Flower, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const beautyServices = [
  { name: "Hair Styling", icon: Scissors, count: "156 providers" },
  { name: "Nail Services", icon: Sparkles, count: "89 providers" },
  { name: "Spa Services", icon: Flower, count: "67 providers" },
  { name: "Personal Training", icon: Users, count: "134 providers" },
]

export default function BeautyWellnessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Beauty & Wellness</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pamper yourself with professional beauty and wellness services. Licensed professionals for all your needs.
          </p>
        </div>

        <div className="mb-12">
          <SearchSection />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Beauty Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {beautyServices.map((service) => (
              <Card
                key={service.name}
                className="glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer group border-gray-700/50 hover:border-teal-500/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Top Beauty Professionals</h2>
          <TrendingProviders />
        </div>
      </div>
    </div>
  )
}
