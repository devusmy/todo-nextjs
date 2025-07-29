import { Rocket } from "lucide-react"

export function AppHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Rocket className="w-6 h-6 text-blue-400" />
        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">Todo</span> <span className="text-purple-400">App</span>
        </h1>
      </div>
    </div>
  )
}
