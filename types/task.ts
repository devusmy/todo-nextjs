export interface Task {
  id: string
  title: string
  color: string
  completed: boolean
}

export type ViewType = "list" | "add" | "edit"
