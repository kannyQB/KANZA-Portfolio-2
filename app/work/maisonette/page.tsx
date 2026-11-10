import type { Metadata } from "next"
import Maisonette from "@/design-pages/Maisonette"

export const metadata: Metadata = { title: "Maisonette case study" }

export default function Page() {
  return (
    <div className="case-page design-page">
      <Maisonette />
    </div>
  )
}
