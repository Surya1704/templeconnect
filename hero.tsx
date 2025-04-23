"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EditableText } from "@/components/editable-text"

export function Hero() {
  const [title, setTitle] = useState("Connect with Divine Temples")
  const [subtitle, setSubtitle] = useState("Book darshans, make donations, and order prasad from temples across India")
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image
        src="/placeholder.svg?height=800&width=1600"
        alt="Temple background"
        fill
        className="object-cover brightness-75"
      />
      <div className="absolute top-1/2 w-full text-center -translate-y-1/2">
        <div className="text-white space-y-4 px-8 max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <EditableText value={title} onChange={setTitle} isEditing={isEditing} className="font-bold" />
          </h1>
          <p className="text-lg sm:text-xl">
            <EditableText value={subtitle} onChange={setSubtitle} isEditing={isEditing} />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-orange-600 text-white hover:bg-orange-700">Book Darshan</Button>
            <Button
              variant="outline"
              className="bg-white text-orange-600 border-orange-600 hover:bg-orange-50"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Save Changes" : "Edit Content"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
