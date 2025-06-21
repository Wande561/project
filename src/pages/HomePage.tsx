import { Navigation } from "@/components/Navigation"
import { SearchSection } from "@/components/SearchSection"
import { CategoryGrid } from "@/components/CategoryGrid"
import { TrendingProviders } from "@/components/TrendingProviders"
import { FeaturedServices } from "@/components/FeaturedServices"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Trusted Local
            <span className="block text-teal-400">Service Providers</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with verified professionals in your area. From home repairs to personal services, we've got you
            covered with quality you can trust.
          </p>

          <SearchSection />
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Popular Categories</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Trending Providers */}
      <section className="px-4 py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Trending Providers</h2>
          <TrendingProviders />
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Services</h2>
          <FeaturedServices />
        </div>
      </section>
    </div>
  )
}
