import type { Metadata } from "next"
import FreelanceOps from "@/design-pages/FreelanceOps"

export const metadata: Metadata = { title: "Freelance Ops case study" }

export default function Page() {
  return (
    <div className="case-page design-page">
      <FreelanceOps />
    </div>
  )
}
