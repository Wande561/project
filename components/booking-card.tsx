"use client"

import { useState } from "react"
import { Calendar, MapPin, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function BookingCard() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [location, setLocation] = useState("")
  const [notes, setNotes] = useState("")

  const services = [
    { id: "standard", name: "Standard Cleaning", price: 45, duration: "2-3 hours" },
    { id: "deep", name: "Deep Cleaning", price: 65, duration: "4-5 hours" },
    { id: "move", name: "Move-in/out Cleaning", price: 85, duration: "5-6 hours" },
  ]

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const estimatedCost = selectedServiceData ? selectedServiceData.price * 3 : 0

  return (
    <Card className="glass-card border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white">Book This Service</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Service Selection */}
        <div>
          <Label htmlFor="service" className="text-gray-300">
            Select Service
          </Label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-teal-500">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id} className="text-white hover:bg-gray-700">
                  <div className="flex justify-between items-center w-full">
                    <span>{service.name}</span>
                    <span className="text-teal-400 font-medium">${service.price}/hr</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedServiceData && (
            <p className="text-sm text-gray-400 mt-1">Estimated duration: {selectedServiceData.duration}</p>
          )}
        </div>

        {/* Date Selection */}
        <div>
          <Label htmlFor="date" className="text-gray-300">
            Select Date
          </Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white focus:border-teal-500"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <Label htmlFor="time" className="text-gray-300">
            Preferred Time
          </Label>
          <Select value={selectedTime} onValueChange={setSelectedTime}>
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-teal-500">
              <SelectValue placeholder="Choose time slot" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="morning" className="text-white hover:bg-gray-700">
                Morning (8:00 AM - 12:00 PM)
              </SelectItem>
              <SelectItem value="afternoon" className="text-white hover:bg-gray-700">
                Afternoon (12:00 PM - 5:00 PM)
              </SelectItem>
              <SelectItem value="evening" className="text-white hover:bg-gray-700">
                Evening (5:00 PM - 8:00 PM)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location" className="text-gray-300">
            Service Location
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Enter your address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
            />
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <Label htmlFor="notes" className="text-gray-300">
            Special Instructions (Optional)
          </Label>
          <Textarea
            placeholder="Any specific requirements or notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
            rows={3}
          />
        </div>

        {/* Cost Breakdown */}
        {selectedServiceData && (
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h4 className="font-medium text-white mb-2">Cost Estimate</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Service ({selectedServiceData.name})</span>
                <span>${selectedServiceData.price}/hour</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Estimated time</span>
                <span>3 hours</span>
              </div>
              <div className="flex justify-between font-medium text-teal-400 pt-2 border-t border-gray-700">
                <span>Total Estimate</span>
                <span>${estimatedCost}</span>
              </div>
            </div>
          </div>
        )}

        {/* Book Button */}
        <Button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12"
          disabled={!selectedService || !selectedDate || !selectedTime || !location}
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Book & Pay Securely
        </Button>

        <p className="text-xs text-gray-400 text-center">You won't be charged until the service is confirmed</p>
      </CardContent>
    </Card>
  )
}
