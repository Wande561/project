"use client"

import { useState } from "react"
import { Search, MapPin, Filter, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [rating, setRating] = useState([4])
  const [priceRange, setPriceRange] = useState([50, 200])

  return (
    <div className="glass-card p-6 rounded-2xl max-w-4xl mx-auto border-gray-700/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Search Input */}
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="What service do you need?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
          />
        </div>

        {/* Location Input */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
          />
        </div>

        {/* Service Type */}
        <Select value={serviceType} onValueChange={setServiceType}>
          <SelectTrigger className="h-12 bg-gray-800 border-gray-600 text-white focus:border-teal-500">
            <SelectValue placeholder="Service Type" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="cleaning" className="text-white hover:bg-gray-700">
              Cleaning
            </SelectItem>
            <SelectItem value="plumbing" className="text-white hover:bg-gray-700">
              Plumbing
            </SelectItem>
            <SelectItem value="electrical" className="text-white hover:bg-gray-700">
              Electrical
            </SelectItem>
            <SelectItem value="gardening" className="text-white hover:bg-gray-700">
              Gardening
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

      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Filters */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-teal-400">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-gray-800 border-gray-700">
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-gray-300">Minimum Rating</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <Slider value={rating} onValueChange={setRating} max={5} min={1} step={0.5} className="flex-1" />
                  <span className="text-sm text-gray-400">{rating[0]}+</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-300">Price Range</Label>
                <div className="mt-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    min={10}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 h-12 flex-1 md:flex-none">
          Search Services
        </Button>
      </div>
    </div>
  )
}
