"use client"

import { useParams } from "react-router-dom"
import { Navigation } from "@/components/Navigation"

export default function ProviderPage() {
  const { id } = useParams()

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Provider Profile</h1>
          <p className="text-gray-300">Provider ID: {id}</p>
          <p className="text-gray-400 mt-4">
            This page is under construction. Provider details will be displayed here.
          </p>
        </div>
      </div>
    </div>
  )
}
