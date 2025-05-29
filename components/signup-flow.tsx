"use client"

import { useState } from "react"
import { User, Briefcase, ArrowRight, Shield, CreditCard, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SignupFlow() {
  const [userType, setUserType] = useState<"client" | "provider" | null>(null)
  const [step, setStep] = useState(1)

  if (!userType) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Join SEAServe</h1>
          <p className="text-lg text-gray-300">Choose how you'd like to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client Signup */}
          <Card
            className="glass-card border-gray-700/50 hover:border-teal-500/50 cursor-pointer transition-all duration-300 hover:shadow-2xl"
            onClick={() => setUserType("client")}
          >
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">I need services</CardTitle>
              <p className="text-gray-300">Find and book trusted local service providers</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Quick 2-minute signup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Browse verified providers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Secure booking & payment</span>
                </div>
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Get Started as Client
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Provider Signup */}
          <Card
            className="glass-card border-gray-700/50 hover:border-teal-500/50 cursor-pointer transition-all duration-300 hover:shadow-2xl"
            onClick={() => setUserType("provider")}
          >
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">I offer services</CardTitle>
              <p className="text-gray-300">Grow your business with verified clients</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Verification process required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Access to quality clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Secure payment processing</span>
                </div>
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Get Started as Provider
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {userType === "client" ? (
        <ClientSignup step={step} setStep={setStep} />
      ) : (
        <ProviderSignup step={step} setStep={setStep} />
      )}
    </div>
  )
}

function ClientSignup({ step, setStep }: { step: number; setStep: (step: number) => void }) {
  return (
    <Card className="glass-card border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Client Registration</CardTitle>
        <p className="text-gray-300">Quick and easy setup to start booking services</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-gray-300">
              First Name
            </Label>
            <Input id="firstName" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-gray-300">
              Last Name
            </Label>
            <Input id="lastName" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-300">
            Email Address
          </Label>
          <Input type="email" id="email" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-300">
            Phone Number
          </Label>
          <Input type="tel" id="phone" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
        </div>

        <div>
          <Label htmlFor="location" className="text-gray-300">
            Location
          </Label>
          <Input
            id="location"
            placeholder="City, State"
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
          />
        </div>

        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Create Account</Button>
      </CardContent>
    </Card>
  )
}

function ProviderSignup({ step, setStep }: { step: number; setStep: (step: number) => void }) {
  const steps = [
    { number: 1, title: "Basic Info", icon: User },
    { number: 2, title: "Verification", icon: Shield },
    { number: 3, title: "Professional Details", icon: FileText },
    { number: 4, title: "Payment Setup", icon: CreditCard },
  ]

  return (
    <div>
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((stepItem, index) => (
          <div key={stepItem.number} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= stepItem.number ? "bg-teal-600 text-white" : "bg-gray-700 text-gray-400"
              }`}
            >
              <stepItem.icon className="h-5 w-5" />
            </div>
            <span className={`ml-2 text-sm ${step >= stepItem.number ? "text-teal-400" : "text-gray-400"}`}>
              {stepItem.title}
            </span>
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-4 ${step > stepItem.number ? "bg-teal-600" : "bg-gray-700"}`} />
            )}
          </div>
        ))}
      </div>

      <Card className="glass-card border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-white">{steps[step - 1].title}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && <BasicInfoStep />}
          {step === 2 && <VerificationStep />}
          {step === 3 && <ProfessionalDetailsStep />}
          {step === 4 && <PaymentSetupStep />}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Previous
              </Button>
            )}
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white ml-auto"
              onClick={() => (step < 4 ? setStep(step + 1) : null)}
            >
              {step === 4 ? "Complete Registration" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function BasicInfoStep() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-gray-300">
            First Name
          </Label>
          <Input id="firstName" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-gray-300">
            Last Name
          </Label>
          <Input id="lastName" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-300">
          Email Address
        </Label>
        <Input type="email" id="email" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
      </div>

      <div>
        <Label htmlFor="phone" className="text-gray-300">
          Phone Number
        </Label>
        <Input type="tel" id="phone" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
      </div>

      <div>
        <Label htmlFor="businessName" className="text-gray-300">
          Business Name
        </Label>
        <Input id="businessName" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
      </div>
    </div>
  )
}

function VerificationStep() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
        <h4 className="font-medium text-white mb-2">Identity Verification Required</h4>
        <p className="text-sm text-gray-300">
          To ensure trust and safety, we need to verify your identity with a government-issued ID.
        </p>
      </div>

      <div>
        <Label htmlFor="idType" className="text-gray-300">
          ID Type
        </Label>
        <Select>
          <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-teal-500">
            <SelectValue placeholder="Select ID type" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="drivers-license" className="text-white hover:bg-gray-700">
              Driver's License
            </SelectItem>
            <SelectItem value="passport" className="text-white hover:bg-gray-700">
              Passport
            </SelectItem>
            <SelectItem value="state-id" className="text-white hover:bg-gray-700">
              State ID
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="idUpload" className="text-gray-300">
          Upload ID Document
        </Label>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center bg-gray-800/30">
          <FileText className="h-8 w-8 text-teal-400 mx-auto mb-2" />
          <p className="text-sm text-gray-300">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
        </div>
      </div>
    </div>
  )
}

function ProfessionalDetailsStep() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="serviceCategory" className="text-gray-300">
          Service Category
        </Label>
        <Select>
          <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-teal-500">
            <SelectValue placeholder="Select your primary service" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="cleaning" className="text-white hover:bg-gray-700">
              Cleaning Services
            </SelectItem>
            <SelectItem value="plumbing" className="text-white hover:bg-gray-700">
              Plumbing
            </SelectItem>
            <SelectItem value="electrical" className="text-white hover:bg-gray-700">
              Electrical
            </SelectItem>
            <SelectItem value="handyman" className="text-white hover:bg-gray-700">
              Handyman
            </SelectItem>
            <SelectItem value="beauty" className="text-white hover:bg-gray-700">
              Beauty & Wellness
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="experience" className="text-gray-300">
          Years of Experience
        </Label>
        <Input id="experience" type="number" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
      </div>

      <div>
        <Label htmlFor="description" className="text-gray-300">
          Service Description
        </Label>
        <Textarea
          id="description"
          placeholder="Describe your services and expertise..."
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="portfolio" className="text-gray-300">
          Portfolio/License Upload
        </Label>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center bg-gray-800/30">
          <FileText className="h-8 w-8 text-teal-400 mx-auto mb-2" />
          <p className="text-sm text-gray-300">Upload licenses, certifications, or portfolio</p>
          <p className="text-xs text-gray-400">Multiple files accepted</p>
        </div>
      </div>
    </div>
  )
}

function PaymentSetupStep() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
        <h4 className="font-medium text-white mb-2">Secure Payment Setup</h4>
        <p className="text-sm text-gray-300">
          Link your bank account to receive payments securely. All information is encrypted and protected.
        </p>
      </div>

      <div>
        <Label htmlFor="bankName" className="text-gray-300">
          Bank Name
        </Label>
        <Input id="bankName" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
      </div>

      <div>
        <Label htmlFor="accountNumber" className="text-gray-300">
          Account Number
        </Label>
        <Input
          id="accountNumber"
          type="password"
          className="bg-gray-800 border-gray-600 text-white focus:border-teal-500"
        />
      </div>

      <div>
        <Label htmlFor="routingNumber" className="text-gray-300">
          Routing Number
        </Label>
        <Input id="routingNumber" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
      </div>

      <div>
        <Label htmlFor="taxId" className="text-gray-300">
          Tax ID (SSN/EIN)
        </Label>
        <Input id="taxId" type="password" className="bg-gray-800 border-gray-600 text-white focus:border-teal-500" />
      </div>
    </div>
  )
}
