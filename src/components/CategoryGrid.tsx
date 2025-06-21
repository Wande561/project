import { Link } from "react-router-dom"
import { Home, Wrench, Scissors, Car, Laptop, Camera, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Home Services", icon: Home, count: "1,234 providers", path: "/category/home-services" },
  { name: "Repairs & Maintenance", icon: Wrench, count: "856 providers", path: "/category/repairs-maintenance" },
  { name: "Beauty & Wellness", icon: Scissors, count: "642 providers", path: "/category/beauty-wellness" },
  { name: "Automotive", icon: Car, count: "423 providers", path: "/category/automotive" },
  { name: "Tech Support", icon: Laptop, count: "312 providers", path: "/category/tech-support" },
  { name: "Photography", icon: Camera, count: "234 providers", path: "/browse" },
  { name: "Tutoring", icon: GraduationCap, count: "445 providers", path: "/category/tutoring" },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.name} to={category.path}>
          <Card className="glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer group border-gray-700/50 hover:border-teal-500/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.count}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
