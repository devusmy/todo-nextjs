interface TaskStatsProps {
  total: number
  completed: number
}

export function TaskStats({ total, completed }: TaskStatsProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-blue-400">
        Tasks <span className="text-white ml-1">{total}</span>
      </div>
      <div className="text-purple-400">
        Completed{" "}
        <span className="text-white ml-1">
          {completed} de {total}
        </span>
      </div>
    </div>
  )
}
