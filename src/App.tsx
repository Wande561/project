import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BrowseServicesPage from "./pages/BrowseServicesPage"
import BecomeProviderPage from "./pages/BecomeProviderPage"
import MessagesPage from "./pages/MessagesPage"
import NotificationsPage from "./pages/NotificationsPage"
import AccountPage from "./pages/AccountPage"
import ProviderAccountPage from "./pages/ProviderAccountPage"
import ProviderPage from "./pages/ProviderPage"
import SignupPage from "./pages/SignupPage"
import HomeServicesPage from "./pages/categories/HomeServicesPage"
import RepairsMaintenancePage from "./pages/categories/RepairsMaintenancePage"
import BeautyWellnessPage from "./pages/categories/BeautyWellnessPage"
import AutomotivePage from "./pages/categories/AutomotivePage"
import TechSupportPage from "./pages/categories/TechSupportPage"
import TutoringPage from "./pages/categories/TutoringPage"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseServicesPage />} />
        <Route path="/become-provider" element={<BecomeProviderPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/account/provider" element={<ProviderAccountPage />} />
        <Route path="/provider/:id" element={<ProviderPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/category/home-services" element={<HomeServicesPage />} />
        <Route path="/category/repairs-maintenance" element={<RepairsMaintenancePage />} />
        <Route path="/category/beauty-wellness" element={<BeautyWellnessPage />} />
        <Route path="/category/automotive" element={<AutomotivePage />} />
        <Route path="/category/tech-support" element={<TechSupportPage />} />
        <Route path="/category/tutoring" element={<TutoringPage />} />
      </Routes>
    </div>
  )
}

export default App
