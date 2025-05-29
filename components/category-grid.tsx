import { Home, Wrench, Scissors, Car, Laptop, Camera, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Home Services", icon: Home, count: "1,234 providers" },
  { name: "Repairs & Maintenance", icon: Wrench, count: "856 providers" },
  { name: "Beauty & Wellness", icon: Scissors, count: "642 providers" },
  { name: "Automotive", icon: Car, count: "423 providers" },
  { name: "Tech Support", icon: Laptop, count: "312 providers" },
  { name: "Photography", icon: Camera, count: "234 providers" },
  { name: "Tutoring", icon: GraduationCap, count: "445 providers" },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card
          key={category.name}
          className="glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer group border-gray-700/50 hover:border-teal-500/50"
        >
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <category.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">{category.name}</h3>
            <p className="text-sm text-gray-400">{category.count}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
