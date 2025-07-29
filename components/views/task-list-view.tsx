"use client";

import { Plus } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { TaskStats } from "@/components/task-stats";
import { TaskItem } from "@/components/task-item";
import { EmptyState } from "@/components/empty-state";
import type { Task } from "@/types/task";

interface TaskListViewProps {
  tasks: Task[];
  totalTasks: number;
  completedTasks: number;
  onCreateTask: () => void;
  onEditTask: (task: Task) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskListView({
  tasks,
  totalTasks,
  completedTasks,
  onCreateTask,
  onEditTask,
  onToggleTask,
  onDeleteTask,
}: TaskListViewProps) {
  return (
    <div className="max-w-md mx-auto pt-8">
      {totalTasks === 0 && (
        <p className="text-gray-400 text-sm mb-6">Todo - Empty</p>
      )}

      <AppHeader />

      <button
        onClick={onCreateTask}
        style={{
          backgroundColor: "#1f6f9f",
        }}
        className="w-full text-white py-3 rounded-lg font-medium mb-8 flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1f6f9f] focus:ring-offset-2 focus:ring-offset-gray-900 hover:brightness-110"
      >
        Create Task <Plus className="w-4 h-4" />
      </button>

      <TaskStats total={totalTasks} completed={completedTasks} />

      {totalTasks === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}
