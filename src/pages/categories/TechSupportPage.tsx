import { Navigation } from "@/components/Navigation"
import { TrendingProviders } from "@/components/TrendingProviders"
import { SearchSection } from "@/components/SearchSection"

export default function TechSupportPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Support</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get expert help with all your technology needs. Certified technicians for computers, phones, and more.
          </p>
        </div>

        <div className="mb-12">
          <SearchSection />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Top Tech Professionals</h2>
          <TrendingProviders />
        </div>
      </div>
    </div>
  )
}
