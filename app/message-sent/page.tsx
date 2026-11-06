import type { Metadata } from "next"
import MessageSent from "@/design-pages/MessageSent"

export const metadata: Metadata = { title: "Message sent" }

export default function Page() {
  return (
    <div className="design-page message-page">
      <MessageSent />
    </div>
  )
}
