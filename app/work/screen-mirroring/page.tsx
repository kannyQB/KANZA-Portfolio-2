import type { Metadata } from "next"
import ScreenMirroring from "@/design-pages/ScreenMirroring"

export const metadata: Metadata = { title: "Screen Mirroring case study" }

export default function Page() {
  return (
    <div className="case-page design-page">
      <ScreenMirroring />
    </div>
  )
}
