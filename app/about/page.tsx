import type { Metadata } from "next"
import About from "@/design-pages/About"

export const metadata: Metadata = { title: "About" }

export default function Page() {
  return (
    <div className="about-page design-page">
      <About />
    </div>
  )
}
