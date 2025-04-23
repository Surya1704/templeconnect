"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe, HandIcon as PrayingHands } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditableText } from "@/components/editable-text"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [isEditing, setIsEditing] = useState(false)
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Support",
      links: [
        { id: 1, text: "Help Center", url: "#" },
        { id: 2, text: "Temple Connect Support", url: "#" },
        { id: 3, text: "Safety information", url: "#" },
        { id: 4, text: "Supporting pilgrims with disabilities", url: "#" },
        { id: 5, text: "Cancellation options", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Community",
      links: [
        { id: 1, text: "Temple Connect Foundation", url: "#" },
        { id: 2, text: "Temple preservation initiatives", url: "#" },
        { id: 3, text: "Cultural heritage programs", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Temple Management",
      links: [
        { id: 1, text: "List your temple", url: "#" },
        { id: 2, text: "Resources for temples", url: "#" },
        { id: 3, text: "Temple management tools", url: "#" },
        { id: 4, text: "Visit our community forum", url: "#" },
        { id: 5, text: "Responsible hosting", url: "#" },
      ],
    },
    {
      id: 4,
      title: "TempleConnect",
      links: [
        { id: 1, text: "Newsroom", url: "#" },
        { id: 2, text: "Learn about new features", url: "#" },
        { id: 3, text: "Letter from our founders", url: "#" },
        { id: 4, text: "Careers", url: "#" },
        { id: 5, text: "Investors", url: "#" },
      ],
    },
  ])

  const handleSectionTitleChange = (sectionId, newTitle) => {
    setSections(sections.map((section) => (section.id === sectionId ? { ...section, title: newTitle } : section)))
  }

  const handleLinkTextChange = (sectionId, linkId, newText) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              links: section.links.map((link) => (link.id === linkId ? { ...link, text: newText } : link)),
            }
          : section,
      ),
    )
  }

  return (
    <footer className="border-t bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div key={section.id}>
                <h3 className="font-semibold text-lg mb-4 text-orange-900">
                  <EditableText
                    value={section.title}
                    onChange={(value) => handleSectionTitleChange(section.id, value)}
                    isEditing={isEditing}
                    className="font-semibold text-orange-900"
                  />
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.url} className="text-gray-600 hover:underline hover:text-orange-700">
                        <EditableText
                          value={link.text}
                          onChange={(value) => handleLinkTextChange(section.id, link.id, value)}
                          isEditing={isEditing}
                          className="text-gray-600"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-orange-200 pt-8">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-orange-900">Subscribe to our newsletter</h3>
                <div className="flex gap-2">
                  <Input placeholder="Your email address" className="max-w-xs" />
                  <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-orange-900">Connect with us</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-200 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center">
              <PrayingHands className="h-5 w-5 mr-2 text-orange-600" />
              <span className="font-semibold text-orange-900">TempleConnect</span>
            </div>
            <div>© 2023 TempleConnect, Inc.</div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:underline text-gray-600 hover:text-orange-700">
                Privacy
              </Link>
              <span>·</span>
              <Link href="#" className="hover:underline text-gray-600 hover:text-orange-700">
                Terms
              </Link>
              <span>·</span>
              <Link href="#" className="hover:underline text-gray-600 hover:text-orange-700">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 hover:bg-orange-100"
            >
              <Globe className="h-4 w-4" />
              English (US)
            </Button>
            <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-100">
              ₹ INR
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="text-orange-600 hover:text-orange-700 hover:bg-orange-100"
            >
              {isEditing ? "Save Changes" : "Edit Footer"}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
