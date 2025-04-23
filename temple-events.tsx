"use client"

import { useState } from "react"
import { CalendarIcon, Clock, MapPin, Users, Pencil, Save, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { EditableText } from "@/components/editable-text"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TempleEvents() {
  const [isEditing, setIsEditing] = useState(false)
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Maha Shivaratri",
      temple: "Kashi Vishwanath Temple",
      date: "March 8, 2024",
      time: "All Day Event",
      attendees: "10,000+",
      type: "festival",
      description: "Annual festival dedicated to Lord Shiva with special pujas and abhishekams throughout the night.",
    },
    {
      id: 2,
      title: "Ganga Aarti",
      temple: "Dashashwamedh Ghat",
      date: "Daily",
      time: "6:30 PM - 7:15 PM",
      attendees: "1,000+",
      type: "ritual",
      description: "Daily ritual performed on the banks of river Ganga with fire and offerings to the river goddess.",
    },
    {
      id: 3,
      title: "Janmashtami Celebration",
      temple: "ISKCON Temple",
      date: "August 26, 2024",
      time: "7:00 PM - Midnight",
      attendees: "5,000+",
      type: "festival",
      description: "Celebration of Lord Krishna's birth with bhajans, kirtans, and special midnight aarti.",
    },
    {
      id: 4,
      title: "Navratri Festival",
      temple: "Vaishno Devi Temple",
      date: "October 3-12, 2024",
      time: "Various timings",
      attendees: "15,000+",
      type: "festival",
      description: "Nine-day festival celebrating the divine feminine with special pujas and cultural programs.",
    },
  ])

  const handleEventChange = (id, field, value) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, [field]: value } : event)))
  }

  const handleAddEvent = () => {
    const newId = Math.max(...events.map((e) => e.id)) + 1
    setEvents([
      ...events,
      {
        id: newId,
        title: "New Event",
        temple: "Temple Name",
        date: "Event Date",
        time: "Event Time",
        attendees: "Expected Attendees",
        type: "ritual",
        description: "Event description goes here.",
      },
    ])
  }

  const handleRemoveEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-orange-900">Upcoming Events & Festivals</h2>
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
              Edit Events
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="bg-orange-50">
          <TabsTrigger value="all" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            All Events
          </TabsTrigger>
          <TabsTrigger value="festivals" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Festivals
          </TabsTrigger>
          <TabsTrigger value="rituals" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Daily Rituals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isEditing={isEditing}
                onEventChange={handleEventChange}
                onRemoveEvent={handleRemoveEvent}
              />
            ))}

            {isEditing && (
              <button
                onClick={handleAddEvent}
                className="border-2 border-dashed border-orange-200 rounded-xl flex flex-col items-center justify-center h-64 hover:border-orange-400 transition-colors"
              >
                <Plus className="h-8 w-8 text-orange-400" />
                <span className="mt-2 text-orange-600">Add Event</span>
              </button>
            )}
          </div>
        </TabsContent>

        <TabsContent value="festivals" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.type === "festival")
              .map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isEditing={isEditing}
                  onEventChange={handleEventChange}
                  onRemoveEvent={handleRemoveEvent}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="rituals" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.type === "ritual")
              .map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isEditing={isEditing}
                  onEventChange={handleEventChange}
                  onRemoveEvent={handleRemoveEvent}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function EventCard({ event, isEditing, onEventChange, onRemoveEvent }) {
  return (
    <Card className="overflow-hidden border-orange-100">
      <CardContent className="p-6">
        {isEditing && (
          <button
            className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white"
            onClick={() => onRemoveEvent(event.id)}
          >
            <Trash className="h-4 w-4" />
          </button>
        )}

        <div className="mb-4">
          <Badge className={`${event.type === "festival" ? "bg-orange-600" : "bg-orange-400"} text-white`}>
            {event.type === "festival" ? "Festival" : "Daily Ritual"}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold mb-2">
          <EditableText
            value={event.title}
            onChange={(value) => onEventChange(event.id, "title", value)}
            isEditing={isEditing}
            className="font-semibold"
          />
        </h3>

        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-orange-500" />
            <EditableText
              value={event.temple}
              onChange={(value) => onEventChange(event.id, "temple", value)}
              isEditing={isEditing}
              className="text-sm"
            />
          </div>

          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-orange-500" />
            <EditableText
              value={event.date}
              onChange={(value) => onEventChange(event.id, "date", value)}
              isEditing={isEditing}
              className="text-sm"
            />
          </div>

          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-orange-500" />
            <EditableText
              value={event.time}
              onChange={(value) => onEventChange(event.id, "time", value)}
              isEditing={isEditing}
              className="text-sm"
            />
          </div>

          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-orange-500" />
            <EditableText
              value={event.attendees}
              onChange={(value) => onEventChange(event.id, "attendees", value)}
              isEditing={isEditing}
              className="text-sm"
            />
          </div>
        </div>

        <div className="mt-4 text-gray-700">
          <EditableText
            value={event.description}
            onChange={(value) => onEventChange(event.id, "description", value)}
            isEditing={isEditing}
            className="text-sm"
          />
        </div>
      </CardContent>

      <CardFooter className="bg-orange-50 p-4 flex justify-between">
        <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-100">
          View Details
        </Button>
        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
          Register
        </Button>
      </CardFooter>
    </Card>
  )
}
