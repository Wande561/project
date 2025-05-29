"use client"

import { useState } from "react"
import { Bell, Menu, MessageCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="glass-card sticky top-0 z-50 px-4 py-3 border-gray-700/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-teal-400">SEAServe</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
            Browse Services
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
            Become a Provider
          </Button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-400 hover:bg-gray-800">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
              <DropdownMenuItem className="text-gray-300 hover:text-teal-400 hover:bg-gray-700">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-teal-400 hover:bg-gray-700">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-teal-400 hover:bg-gray-700">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-teal-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
