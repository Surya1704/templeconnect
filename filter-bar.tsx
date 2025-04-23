"use client"

import { useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  Flame,
  Mountain,
  Landmark,
  HandIcon as PrayingHands,
  NotebookIcon as Lotus,
  Sunrise,
  Sunset,
  Sparkles,
  Leaf,
  Waves,
  Flower,
  Plus,
  X,
} from "lucide-react"
import { EditableText } from "@/components/editable-text"

export function FilterBar() {
  const [isEditing, setIsEditing] = useState(false)
  const [filters, setFilters] = useState([
    { id: 1, name: "Popular", icon: Flame },
    { id: 2, name: "Shiva Temples", icon: Mountain },
    { id: 3, name: "Vishnu Temples", icon: Landmark },
    { id: 4, name: "Shakti Temples", icon: Lotus },
    { id: 5, name: "Ganesh Temples", icon: Lotus },
    { id: 6, name: "Morning Aarti", icon: Sunrise },
    { id: 7, name: "Evening Aarti", icon: Sunset },
    { id: 8, name: "Special Pujas", icon: Sparkles },
    { id: 9, name: "Prasad Delivery", icon: Leaf },
    { id: 10, name: "Riverside", icon: Waves },
    { id: 11, name: "Festivals", icon: Flower },
  ])

  const handleFilterChange = (id, newName) => {
    setFilters(filters.map((filter) => (filter.id === id ? { ...filter, name: newName } : filter)))
  }

  const handleAddFilter = () => {
    const newId = Math.max(...filters.map((f) => f.id)) + 1
    setFilters([...filters, { id: newId, name: "New Filter", icon: PrayingHands }])
  }

  const handleRemoveFilter = (id) => {
    setFilters(filters.filter((filter) => filter.id !== id))
  }

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-orange-900">Browse by category</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="text-orange-600 border-orange-200 hover:bg-orange-50"
        >
          {isEditing ? "Save Filters" : "Edit Filters"}
        </Button>
      </div>

      <ScrollArea className="whitespace-nowrap pb-4">
        <div className="flex space-x-4">
          {filters.map((filter) => {
            const Icon = filter.icon
            return (
              <div key={filter.id} className="flex flex-col items-center space-y-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-full relative border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
                >
                  <Icon className="h-6 w-6" />
                  {isEditing && (
                    <button
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                      onClick={() => handleRemoveFilter(filter.id)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </Button>
                <div className="text-xs">
                  <EditableText
                    value={filter.name}
                    onChange={(value) => handleFilterChange(filter.id, value)}
                    isEditing={isEditing}
                    className="text-xs text-center"
                  />
                </div>
              </div>
            )
          })}

          {isEditing && (
            <div className="flex flex-col items-center space-y-2">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-orange-200 text-orange-600 hover:bg-orange-50"
                onClick={handleAddFilter}
              >
                <Plus className="h-6 w-6" />
              </Button>
              <div className="text-xs">Add Filter</div>
            </div>
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
