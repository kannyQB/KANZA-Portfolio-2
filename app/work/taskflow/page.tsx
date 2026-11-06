import type { Metadata } from "next"
import TaskFlow from "@/design-pages/TaskFlow"

export const metadata: Metadata = { title: "TaskFlow case study" }

export default function Page() {
  return (
    <div className="case-page design-page">
      <TaskFlow />
    </div>
  )
}
