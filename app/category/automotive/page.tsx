import { Navigation } from "@/components/navigation"
import { TrendingProviders } from "@/components/trending-providers"
import { SearchSection } from "@/components/search-section"
import { Car, Wrench, Fuel, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const automotiveServices = [
  { name: "Auto Repair", icon: Wrench, count: "123 providers" },
  { name: "Car Detailing", icon: Car, count: "89 providers" },
  { name: "Oil Change", icon: Fuel, count: "67 providers" },
  { name: "Insurance Claims", icon: Shield, count: "45 providers" },
]

export default function AutomotivePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Automotive Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Keep your vehicle running smoothly with professional automotive services. Certified mechanics and detailers.
          </p>
        </div>

        <div className="mb-12">
          <SearchSection />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Automotive Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {automotiveServices.map((service) => (
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
          <h2 className="text-2xl font-bold text-white mb-6">Top Automotive Professionals</h2>
          <TrendingProviders />
        </div>
      </div>
    </div>
  )
}
