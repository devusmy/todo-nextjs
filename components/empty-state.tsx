import { ClipboardList } from "lucide-react"

export function EmptyState() {
  return (
    <div className="text-center py-16">
      <ClipboardList className="w-16 h-16 text-gray-600 mx-auto mb-4" />
      <p className="text-gray-400 mb-2">{"You don't have any tasks registered yet."}</p>
      <p className="text-gray-500 text-sm">Create tasks and organize your to-do items.</p>
    </div>
  )
}
