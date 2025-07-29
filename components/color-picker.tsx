"use client"

import { TASK_COLORS } from "@/constants/colors"

interface ColorPickerProps {
  selectedColor: string
  onColorSelect: (color: string) => void
}

export function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div>
      <label className="block text-blue-400 text-sm font-medium mb-4">Color</label>
      <div className="flex gap-3 flex-wrap">
        {TASK_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className={`w-12 h-12 rounded-full border-2 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 ${
              selectedColor === color ? "border-white" : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  )
}
