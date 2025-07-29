"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Check } from "lucide-react"
import { AppHeader } from "@/components/app-header"
import { ColorPicker } from "@/components/color-picker"
import type { Task } from "@/types/task"

interface EditTaskViewProps {
  task: Task
  onBack: () => void
  onSaveTask: (id: string, title: string, color: string) => void
}

export function EditTaskView({ task, onBack, onSaveTask }: EditTaskViewProps) {
  const [title, setTitle] = useState(task.title)
  const [selectedColor, setSelectedColor] = useState(task.color)

  useEffect(() => {
    setTitle(task.title)
    setSelectedColor(task.color)
  }, [task])

  const handleSubmit = () => {
    if (title.trim()) {
      onSaveTask(task.id, title, selectedColor)
    }
  }

  return (
    <div className="max-w-md mx-auto pt-8">
      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-4">Detail View</p>
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
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        <ColorPicker selectedColor={selectedColor} onColorSelect={setSelectedColor} />

        <button
          onClick={handleSubmit}
          disabled={!title.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
        >
          Save <Check className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
