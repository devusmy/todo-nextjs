"use client"

import { useEffect, useState } from "react"
import type { Task } from "@/types/task"

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    setLoading(true)
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
      const res = await fetch(`${apiUrl}/tasks`)
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      setError("Failed to fetch tasks")
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (title: string, color: string) => {
    if (!title.trim()) return false

    const newTask = { title: title.trim(), color, completed: false }
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
      const res = await fetch(`${apiUrl}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      })
      const created = await res.json()
      setTasks((prev) => [...prev, created])
      return true
    } catch (err) {
      setError("Failed to create task")
      return false
    }
  }

  const updateTask = async (id: string, updates: Partial<Task>) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
      const res = await fetch(`${apiUrl}/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })
      const updated = await res.json()
      setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)))
    } catch (err) {
      setError("Failed to update task")
    }
  }

  const deleteTask = async (id: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
      await fetch(`${apiUrl}/tasks/${id}`, { method: "DELETE" })
      setTasks((prev) => prev.filter((task) => task.id !== id))
    } catch (err) {
      setError("Failed to delete task")
    }
  }

  const toggleTask = async (id: string) => {
    const current = tasks.find((t) => t.id === id)
    if (!current) return
    await updateTask(id, { completed: !current.completed })
  }

  const getTaskById = (id: string): Task | null => {
    return tasks.find((task) => task.id === id) || null
  }

  const getStats = () => {
    const total = tasks.length
    const completed = tasks.filter((task) => task.completed).length
    return { total, completed }
  }

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    getTaskById,
    getStats,
    refetch: fetchTasks,
  }
}
