"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type Props = {
  email?: string
  className?: string
  /** matches your CSS hooks: "Copy email" (pill) or "Copy email (icon)" (footer) */
  dataName?: string
  label?: string
  children: ReactNode
  copiedChildren?: ReactNode
}

export default function CopyEmailButton({
  email = "kannyqb@gmail.com",
  className = "",
  dataName = "Copy email",
  label = "Copy email address",
  children,
  copiedChildren = (
    <span aria-hidden="true" className="text-[18px] leading-none">
      ✓
    </span>
  ),
}: Props) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // fallback for non-secure contexts / older browsers
      const ta = document.createElement("textarea")
      ta.value = email
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
    }
    setCopied(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      data-name={dataName}
      data-copied={copied}
      className={className}
    >
      {copied ? copiedChildren : children}
      <span className="sr-only" role="status">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  )
}