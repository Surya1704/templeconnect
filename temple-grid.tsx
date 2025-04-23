"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Heart, Pencil, Save, Plus, Trash, HandIcon as PrayingHands, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditableText } from "@/components/editable-text"
import { EditableNumber } from "@/components/editable-number"
import { Badge } from "@/components/ui/badge"

export function TempleGrid() {
  const [isEditing, setIsEditing] = useState(false)
  const [temples, setTemples] = useState([
    {
      id: 1,
      title: "Varanasi Kashi Vishwanath",
      location: "Varanasi, Uttar Pradesh",
      date: "Open daily 3:00 AM - 11:00 PM",
      price: 500,
      rating: 4.92,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Aarti", "Prasad"],
    },
    {
      id: 2,
      title: "Tirupati Balaji Temple",
      location: "Tirupati, Andhra Pradesh",
      date: "Booking required",
      price: 300,
      rating: 4.85,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Prasad", "Accommodation"],
    },
    {
      id: 3,
      title: "Golden Temple",
      location: "Amritsar, Punjab",
      date: "Open 24 hours",
      price: 0,
      rating: 4.98,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Langar", "Amrit Sarovar"],
    },
    {
      id: 4,
      title: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu",
      date: "Open 5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
      price: 100,
      rating: 4.91,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Aarti", "Cultural Tour"],
    },
    {
      id: 5,
      title: "Jagannath Temple",
      location: "Puri, Odisha",
      date: "Open 5:00 AM - 11:00 PM",
      price: 200,
      rating: 4.89,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Mahaprasad", "Rath Yatra"],
    },
    {
      id: 6,
      title: "Somnath Temple",
      location: "Somnath, Gujarat",
      date: "Open 6:00 AM - 9:00 PM",
      price: 150,
      rating: 4.95,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Aarti", "Light & Sound Show"],
    },
    {
      id: 7,
      title: "Kedarnath Temple",
      location: "Kedarnath, Uttarakhand",
      date: "Open May to October",
      price: 250,
      rating: 4.87,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Helicopter Service", "Trekking"],
    },
    {
      id: 8,
      title: "Badrinath Temple",
      location: "Badrinath, Uttarakhand",
      date: "Open May to November",
      price: 200,
      rating: 4.93,
      image: "/placeholder.svg?height=500&width=500",
      features: ["Darshan", "Tapt Kund", "Meditation"],
    },
  ])

  const handleTempleChange = (id, field, value) => {
    setTemples(temples.map((temple) => (temple.id === id ? { ...temple, [field]: value } : temple)))
  }

  const handleAddTemple = () => {
    const newId = Math.max(...temples.map((p) => p.id)) + 1
    setTemples([
      ...temples,
      {
        id: newId,
        title: "New Temple",
        location: "Location",
        date: "Opening Hours",
        price: 100,
        rating: 5.0,
        image: "/placeholder.svg?height=500&width=500",
        features: ["Darshan"],
      },
    ])
  }

  const handleRemoveTemple = (id) => {
    setTemples(temples.filter((temple) => temple.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-orange-900">Sacred Destinations</h2>
        <Button
          variant="outline"
          onClick={() => setIsEditing(!isEditing)}
          className="text-orange-600 border-orange-200 hover:bg-orange-50"
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Temples
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {temples.map((temple) => (
          <div key={temple.id} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={temple.image || "/placeholder.svg"}
                alt={temple.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white">
                <Heart className="h-5 w-5 text-orange-600" />
              </button>

              {isEditing && (
                <button
                  className="absolute top-3 left-3 p-2 rounded-full bg-red-500 text-white"
                  onClick={() => handleRemoveTemple(temple.id)}
                >
                  <Trash className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-start">
                <div className="font-semibold">
                  <EditableText
                    value={temple.title}
                    onChange={(value) => handleTempleChange(temple.id, "title", value)}
                    isEditing={isEditing}
                    className="font-semibold"
                  />
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-orange-500 mr-1" />
                  <EditableNumber
                    value={temple.rating}
                    onChange={(value) => handleTempleChange(temple.id, "rating", value)}
                    isEditing={isEditing}
                    min={1}
                    max={5}
                    step={0.01}
                  />
                </div>
              </div>

              <div className="text-gray-500">
                <EditableText
                  value={temple.location}
                  onChange={(value) => handleTempleChange(temple.id, "location", value)}
                  isEditing={isEditing}
                  className="text-gray-500"
                />
              </div>

              <div className="text-gray-500">
                <EditableText
                  value={temple.date}
                  onChange={(value) => handleTempleChange(temple.id, "date", value)}
                  isEditing={isEditing}
                  className="text-gray-500"
                />
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {temple.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="mt-3 flex justify-between items-center">
                <div>
                  <span className="font-semibold">
                    ₹
                    <EditableNumber
                      value={temple.price}
                      onChange={(value) => handleTempleChange(temple.id, "price", value)}
                      isEditing={isEditing}
                      min={0}
                      step={50}
                    />
                  </span>{" "}
                  <span className="text-sm text-gray-500">darshan</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                    <PrayingHands className="h-4 w-4 mr-1" /> Book
                  </Button>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Gift className="h-4 w-4 mr-1" /> Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {isEditing && (
          <button
            onClick={handleAddTemple}
            className="border-2 border-dashed border-orange-200 rounded-xl flex flex-col items-center justify-center aspect-square hover:border-orange-400 transition-colors"
          >
            <Plus className="h-8 w-8 text-orange-400" />
            <span className="mt-2 text-orange-600">Add Temple</span>
          </button>
        )}
      </div>
    </div>
  )
}
