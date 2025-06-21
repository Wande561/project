import { Navigation } from "@/components/Navigation"
import { SearchSection } from "@/components/SearchSection"
import { TrendingProviders } from "@/components/TrendingProviders"
import { CategoryGrid } from "@/components/CategoryGrid"

export default function BrowseServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse All Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find the perfect service provider for your needs. Browse by category or search for specific services.
          </p>
        </div>

        <div className="mb-12">
          <SearchSection />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Service Categories</h2>
          <CategoryGrid />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">All Providers</h2>
          <TrendingProviders />
        </div>
      </div>
    </div>
  )
}
