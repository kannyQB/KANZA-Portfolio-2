import type { Metadata } from "next"
import Vigil from "@/design-pages/Vigil"

export const metadata: Metadata = { title: "Vigil case study" }

export default function Page() {
  return (
    <div className="case-page design-page">
      <Vigil />
    </div>
  )
}
