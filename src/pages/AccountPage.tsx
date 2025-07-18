import { Navigation } from "@/components/Navigation"

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Account Settings</h1>
          <p className="text-gray-300">Manage your account and preferences</p>
          <p className="text-gray-400 mt-4">This page is under construction.</p>
        </div>
      </div>
    </div>
  )
}
