import { Navigation } from "@/components/Navigation"
import { TrendingProviders } from "@/components/TrendingProviders"
import { SearchSection } from "@/components/SearchSection"

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

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Top Automotive Professionals</h2>
          <TrendingProviders />
        </div>
      </div>
    </div>
  )
}
