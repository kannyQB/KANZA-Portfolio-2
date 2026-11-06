import type { Metadata } from "next"
import Contact from "@/design-pages/Contact"

export const metadata: Metadata = { title: "Contact" }

export default function Page() {
  return (
    <div className="contact-page design-page">
      <Contact />
    </div>
  )
}
