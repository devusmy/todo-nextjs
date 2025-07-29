"use client"

import { Trash2 } from "lucide-react"
import type { Task } from "@/types/task"

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3 group hover:bg-gray-750 transition-colors">
      <button
        onClick={() => onToggle(task.id)}
        className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
          task.completed ? "bg-purple-600 border-purple-600 text-white" : "border-gray-400 hover:border-purple-400"
        }`}
        aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {task.completed && (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: task.color }} />
      <button
        onClick={() => onEdit(task)}
        className={`flex-1 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-1 ${
          task.completed ? "text-gray-500 line-through" : "text-white hover:text-gray-300"
        }`}
      >
        {task.title}
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded p-1"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}
