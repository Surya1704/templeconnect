"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface EditableNumberProps {
  value: number
  onChange: (value: number) => void
  isEditing: boolean
  min?: number
  max?: number
  step?: number
  className?: string
}

export function EditableNumber({
  value,
  onChange,
  isEditing,
  min,
  max,
  step = 1,
  className = "",
}: EditableNumberProps) {
  const [number, setNumber] = useState(value)

  useEffect(() => {
    setNumber(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number.parseFloat(e.target.value))
  }

  const handleBlur = () => {
    onChange(number)
  }

  if (isEditing) {
    return (
      <Input
        type="number"
        value={number}
        onChange={handleChange}
        onBlur={handleBlur}
        min={min}
        max={max}
        step={step}
        className={`w-20 h-auto py-1 px-2 ${className}`}
      />
    )
  }

  return <span className={className}>{value}</span>
}
