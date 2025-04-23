"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Globe, Menu, User, HandIcon as PrayingHands } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { EditableText } from "@/components/editable-text"

export function Header() {
  const [logo, setLogo] = useState("TempleConnect")
  const [isEditing, setIsEditing] = useState(false)

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center">
          <Link href="/" className="text-orange-600 text-2xl font-bold flex items-center">
            <PrayingHands className="h-6 w-6 mr-2 text-orange-600" />
            <EditableText value={logo} onChange={setLogo} isEditing={isEditing} className="font-bold text-orange-600" />
          </Link>
        </div>

        <div className="hidden md:flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="border-r pr-4 font-medium">Any Temple</div>
          <div className="border-r px-4 font-medium">Any Date</div>
          <div className="pl-4 pr-2 text-gray-500">Darshan Type</div>
          <div className="bg-orange-600 p-2 rounded-full text-white">
            <Search className="h-4 w-4" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 rounded-full text-orange-600 hover:text-orange-700 hover:bg-orange-50"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Save Changes" : "Edit Content"}
          </Button>

          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 rounded-full text-orange-600 hover:text-orange-700 hover:bg-orange-50"
          >
            <span>List Your Temple</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hidden md:flex text-orange-600 hover:text-orange-700 hover:bg-orange-50"
          >
            <Globe className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border shadow-sm p-2 md:p-4 border-orange-200 text-orange-600"
              >
                <Menu className="h-5 w-5" />
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Sign up</DropdownMenuItem>
              <DropdownMenuItem>Log in</DropdownMenuItem>
              <DropdownMenuItem>List Your Temple</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              {!isEditing ? (
                <DropdownMenuItem onClick={() => setIsEditing(true)}>Edit Content</DropdownMenuItem>
              ) : (
                <DropdownMenuItem onClick={() => setIsEditing(false)}>Save Changes</DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center border rounded-full p-2 shadow-sm">
          <div className="flex items-center gap-2 pl-2">
            <Search className="h-4 w-4" />
            <div>
              <div className="font-medium text-sm">Any Temple</div>
              <div className="text-xs text-gray-500">Any Date · Darshan Type</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
