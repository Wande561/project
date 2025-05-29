import { Navigation } from "@/components/navigation"
import { DollarSign, Users, Shield, Star, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: DollarSign,
    title: "Earn More",
    description: "Set your own rates and keep 85% of what you earn",
  },
  {
    icon: Users,
    title: "Quality Clients",
    description: "Connect with verified customers in your area",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Protected payments and verified customer reviews",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Grow your business with our rating system",
  },
]

const steps = [
  {
    step: 1,
    title: "Sign Up",
    description: "Create your provider account and verify your identity",
  },
  {
    step: 2,
    title: "Complete Profile",
    description: "Add your services, rates, and portfolio",
  },
  {
    step: 3,
    title: "Get Verified",
    description: "Upload required documents and certifications",
  },
  {
    step: 4,
    title: "Start Earning",
    description: "Receive bookings and grow your business",
  },
]

export default function BecomeProviderPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Grow Your Business with
            <span className="block text-teal-400">SEAServe</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of service providers who are building successful businesses on our platform. Start earning
            more today.
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
            Get Started Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose SEAServe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="glass-card border-gray-700/50 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h2>
          <p className="text-lg text-gray-300 mb-8">Join our community of successful service providers today.</p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">Sign Up as Provider</Button>
        </div>
      </section>
    </div>
  )
}
