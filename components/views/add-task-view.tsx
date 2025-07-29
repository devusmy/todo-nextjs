"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { AppHeader } from "@/components/app-header"
import { ColorPicker } from "@/components/color-picker"
import { TASK_COLORS } from "@/constants/colors"

interface AddTaskViewProps {
  onBack: () => void
  onAddTask: (title: string, color: string) => Promise<boolean>
}

export function AddTaskView({ onBack, onAddTask }: AddTaskViewProps) {
  const [title, setTitle] = useState("")
  const [selectedColor, setSelectedColor] = useState(TASK_COLORS[0])

  const handleSubmit = async () => {
    if (await onAddTask(title, selectedColor)) {
      setTitle("")
      setSelectedColor(TASK_COLORS[0])
    }
  }

  return (
    <div className="max-w-md mx-auto pt-8">
      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-4">Added Task</p>
        <button
          onClick={onBack}
          className="text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-1 mb-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <AppHeader />

      <div className="space-y-6">
        <div>
          <label className="block text-blue-400 text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush you teeth"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        <ColorPicker selectedColor={selectedColor} onColorSelect={setSelectedColor} />

        <button
          onClick={handleSubmit}
          disabled={!title.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}
