import type { Metadata } from "next"
import type { ReactNode } from "react"
import InteractionLayer from "@/components/interaction-layer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Kanza Iqbal — Product & UX Designer",
    template: "%s — Kanza Iqbal",
  },
  description:
    "Product and UX designer creating clear, thoughtful interfaces for mobile apps, SaaS dashboards and websites.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <InteractionLayer>{children}</InteractionLayer>
      </body>
    </html>
  )
}
