"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Heart, Pencil, Save, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditableText } from "@/components/editable-text"
import { EditableNumber } from "@/components/editable-number"

export function PropertyGrid() {
  const [isEditing, setIsEditing] = useState(false)
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Villa in Bali",
      location: "Bali, Indonesia",
      date: "Nov 12-18",
      price: 350,
      rating: 4.92,
      image: "/placeholder.svg?height=500&width=500",
    },
    {
      id: 2,
      title: "Mountain Cabin",
      location: "Aspen, Colorado",
      date: "Dec 5-10",
      price: 250,
      rating: 4.85,
      image: "/placeholder.svg?height=500&width=500",
    },
    {
      id: 3,
      title: "Beachfront Apartment",
      location: "Cancun, Mexico",
      date: "Jan 15-22",
      price: 180,
      rating: 4.78,
      image: "/placeholder.svg?height=500&width=500",
    },
    {
      id: 4,
      title: "City Loft",
      location: "New York, USA",
      date: "Oct 8-14",
      price: 220,
      rating: 4.91,
      image: "/placeholder.svg?height=500&width=500",
    },
    {
      id: 5,
      title: "Countryside Cottage",
      location: "Cotswolds, UK",
      date: "Sep 20-25",
      price: 195,
      rating: 4.89,
      image: "/placeholder.svg?height=500&width=500",
    },
    {
      id: 6,
      title: "Lakeside Retreat",
      location: "Lake Como, Italy",
      date: "Aug 1-8",
      price: 280,
      rating: 4.95,
      image: "/placeholder.svg?height=500&width=500",
    },
    {
      id: 7,
      title: "Desert Oasis",
      location: "Dubai, UAE",
      date: "Feb 10-15",
      price: 420,
      rating: 4.87,
      image: "/placeholder.svg?height=500&width=500",
    },
    {
      id: 8,
      title: "Ski Chalet",
      location: "Chamonix, France",
      date: "Dec 20-27",
      price: 310,
      rating: 4.93,
      image: "/placeholder.svg?height=500&width=500",
    },
  ])

  const handlePropertyChange = (id, field, value) => {
    setProperties(properties.map((property) => (property.id === id ? { ...property, [field]: value } : property)))
  }

  const handleAddProperty = () => {
    const newId = Math.max(...properties.map((p) => p.id)) + 1
    setProperties([
      ...properties,
      {
        id: newId,
        title: "New Property",
        location: "Location",
        date: "Date Range",
        price: 100,
        rating: 5.0,
        image: "/placeholder.svg?height=500&width=500",
      },
    ])
  }

  const handleRemoveProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Popular destinations</h2>
        <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Properties
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white">
                <Heart className="h-5 w-5 text-gray-700" />
              </button>

              {isEditing && (
                <button
                  className="absolute top-3 left-3 p-2 rounded-full bg-red-500 text-white"
                  onClick={() => handleRemoveProperty(property.id)}
                >
                  <Trash className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-start">
                <div className="font-semibold">
                  <EditableText
                    value={property.title}
                    onChange={(value) => handlePropertyChange(property.id, "title", value)}
                    isEditing={isEditing}
                    className="font-semibold"
                  />
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-black mr-1" />
                  <EditableNumber
                    value={property.rating}
                    onChange={(value) => handlePropertyChange(property.id, "rating", value)}
                    isEditing={isEditing}
                    min={1}
                    max={5}
                    step={0.01}
                  />
                </div>
              </div>

              <div className="text-gray-500">
                <EditableText
                  value={property.location}
                  onChange={(value) => handlePropertyChange(property.id, "location", value)}
                  isEditing={isEditing}
                  className="text-gray-500"
                />
              </div>

              <div className="text-gray-500">
                <EditableText
                  value={property.date}
                  onChange={(value) => handlePropertyChange(property.id, "date", value)}
                  isEditing={isEditing}
                  className="text-gray-500"
                />
              </div>

              <div className="mt-1">
                <span className="font-semibold">
                  $
                  <EditableNumber
                    value={property.price}
                    onChange={(value) => handlePropertyChange(property.id, "price", value)}
                    isEditing={isEditing}
                    min={1}
                    step={1}
                  />
                </span>{" "}
                night
              </div>
            </div>
          </div>
        ))}

        {isEditing && (
          <button
            onClick={handleAddProperty}
            className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center aspect-square hover:border-gray-400 transition-colors"
          >
            <Plus className="h-8 w-8 text-gray-400" />
            <span className="mt-2 text-gray-500">Add Property</span>
          </button>
        )}
      </div>
    </div>
  )
}
