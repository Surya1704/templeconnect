"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface EditableTextProps {
  value: string
  onChange: (value: string) => void
  isEditing: boolean
  className?: string
}

export function EditableText({ value, onChange, isEditing, className = "" }: EditableTextProps) {
  const [text, setText] = useState(value)

  useEffect(() => {
    setText(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleBlur = () => {
    onChange(text)
  }

  if (isEditing) {
    return (
      <Input
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`min-w-[100px] h-auto py-1 px-2 ${className}`}
      />
    )
  }

  return <span className={className}>{value}</span>
}
