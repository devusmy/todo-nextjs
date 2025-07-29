"use client"

import { useState } from "react"
import { useTasks } from "@/hooks/use-tasks"
import { TaskListView } from "@/components/views/task-list-view"
import { AddTaskView } from "@/components/views/add-task-view"
import { EditTaskView } from "@/components/views/edit-task-view"
import type { Task, ViewType } from "@/types/task"

export default function TodoApp() {
  const { tasks, addTask, updateTask, deleteTask, toggleTask, getTaskById, getStats } = useTasks()

  const [currentView, setCurrentView] = useState<ViewType>("list")
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null)

  const stats = getStats()

  const handleCreateTask = () => {
    setCurrentView("add")
  }

  const handleAddTask = async (title: string, color: string) => {
    const success = await addTask(title, color)
    if (success) {
      setCurrentView("list")
    }
    return success
  }

  const handleEditTask = (task: Task) => {
    setEditingTaskId(task.id)
    setCurrentView("edit")
  }

  const handleSaveTask = (id: string, title: string, color: string) => {
    updateTask(id, { title, color })
    setEditingTaskId(null)
    setCurrentView("list")
  }

  const handleBackToList = () => {
    setEditingTaskId(null)
    setCurrentView("list")
  }

  const editingTask = editingTaskId ? getTaskById(editingTaskId) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      {currentView === "list" && (
        <TaskListView
          tasks={tasks}
          totalTasks={stats.total}
          completedTasks={stats.completed}
          onCreateTask={handleCreateTask}
          onEditTask={handleEditTask}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      )}

      {currentView === "add" && <AddTaskView onBack={handleBackToList} onAddTask={handleAddTask} />}

      {currentView === "edit" && editingTask && (
        <EditTaskView task={editingTask} onBack={handleBackToList} onSaveTask={handleSaveTask} />
      )}
    </div>
  )
}
