import { Navigation } from "@/components/navigation"
import { ProviderProfile } from "@/components/provider-profile"
import { ProviderGallery } from "@/components/provider-gallery"
import { ProviderReviews } from "@/components/provider-reviews"
import { BookingCard } from "@/components/booking-card"

export default function ProviderPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ProviderProfile />
            <ProviderGallery />
            <ProviderReviews />
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
