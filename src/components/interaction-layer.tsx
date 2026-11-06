"use client"

// React marks every DOM node with a __reactFiber$ key once it has been
// hydrated. We wait for that, so we never change classes before hydration.

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"
import type { MouseEvent, ReactNode } from "react"

function routeForLabel(label: string) {
  if (/kanza iqbal/i.test(label)) return "/"
  if (/screen mirroring/i.test(label)) return "/work/screen-mirroring"
  if (/taskflow/i.test(label)) return "/work/taskflow"
  if (/\bvigil\b/i.test(label)) return "/work/vigil"
  if (/about/i.test(label)) return "/about"
  if (/contact|let’s talk|let's talk/i.test(label)) return "/contact"
  if (/work|case studies/i.test(label)) return "/work"
  if (/back to home/i.test(label)) return "/"
  return null
}

function matchesProjectFilter(filter: string, project: HTMLElement) {
  const projectName =
    `${project.dataset.name ?? ""} ${project.textContent ?? ""}`.toLowerCase()

  if (filter === "All") return true
  if (filter === "Concepts") return projectName.includes("concept")
  if (filter === "SaaS & dashboards") {
    return /vigil|taskflow|maisonette/.test(projectName)
  }
  if (filter === "Mobile apps") {
    return /screen mirroring|ai face aging|freelance ops|typesnip/.test(
      projectName,
    )
  }
  if (filter === "Web") return /zorvex|inkspire/.test(projectName)
  return true
}

export default function InteractionLayer({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const selector = [
      "[data-name='Hero']",
      "[data-name='Selected work']",
      "[data-name='Testimonials']",
      "[data-name='Services']",
      "[data-name='Profile']",
      "[data-name='Experience']",
      "[data-name='Skills']",
      "[data-name='Tools']",
      "[data-name^='Section/']",
      "[data-name^='Card/']",
    ].join(",")

    let observer: IntersectionObserver | undefined
    let frame = 0
    let tries = 0
    const isHydrated = (element: Element) =>
      Object.keys(element).some((key) => key.startsWith("__reactFiber$"))

    const start = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(selector),
      )
      if (elements.some((el) => !isHydrated(el)) && tries++ < 120) {
        frame = requestAnimationFrame(start)
        return
      }

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      )
      observer = io

      for (const element of elements) {
        element.classList.add("reveal-ready")
        io.observe(element)
      }
    }

    frame = requestAnimationFrame(start)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [pathname])

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const target = (event.target as HTMLElement).closest<HTMLElement>(
      [
        "a",
        "button",
        "[data-name='Logo']",
        "[data-name='Links'] > *",
        "[data-name^='CTA']",
        "[data-name^='Card/']",
        "[data-name^='Case card/']",
        "[data-name^='Row/']",
        "[data-name^='Filter/']",
        "[data-name^='Chip/']",
        "[data-name^='View/']",
        "[data-name='Send message']",
        "[data-name^='Copy email']",
      ].join(","),
    )
    if (!target) return

    const label = target.textContent?.trim() ?? ""
    const name = target.dataset.name ?? ""

    if (target.closest("[data-name='Before and after slider']")) return
    if (/back to top/i.test(label)) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (/^Copy email/.test(name)) {
      if (!navigator.clipboard) {
        console.error("Clipboard access is unavailable in this browser.")
        return
      }
      void navigator.clipboard
        .writeText("kannyqb@gmail.com")
        .then(() => {
          target.setAttribute("data-copied", "true")
          window.setTimeout(() => target.removeAttribute("data-copied"), 1200)
        })
        .catch((error: unknown) => {
          console.error("Could not copy the email address.", error)
        })
      return
    }
    if (name === "Send message" || /send message/i.test(label)) {
      router.push("/message-sent")
      return
    }
    if (name.startsWith("Filter/")) {
      const filter = name.slice("Filter/".length)
      const page = target.closest<HTMLElement>(".work-page")
      const projects = page?.querySelectorAll<HTMLElement>(
        "[data-name^='Card/'], [data-name^='Row/']",
      )
      if (!page || !projects?.length) return

      for (const project of projects) {
        project.hidden = !matchesProjectFilter(filter, project)
      }

      for (const row of page.querySelectorAll<HTMLElement>(
        "[data-name='Row']",
      )) {
        const cards = Array.from(row.children).filter(
          (child): child is HTMLElement =>
            child instanceof HTMLElement &&
            child.matches("[data-name^='Card/']"),
        )
        if (cards.length) {
          row.hidden = cards.every((card) => card.hidden)
        }
      }

      for (const option of page.querySelectorAll<HTMLElement>(
        "[data-name^='Filter/']",
      )) {
        const active = option === target
        option.setAttribute("aria-pressed", String(active))
        option.dataset.active = String(active)
      }

      const count = page.querySelector<HTMLElement>("[data-name='Right'] p")
      if (count) {
        const visibleProjects = Array.from(projects).filter(
          (project) => !project.hidden,
        ).length
        count.textContent = `${String(visibleProjects).padStart(2, "0")} projects`
      }
      return
    }
    if (/^grid$/i.test(label) || /\/grid$/i.test(name)) {
      router.push("/work?view=grid")
      return
    }
    if (/^list$/i.test(label) || /\/list$/i.test(name)) {
      router.push("/work?view=list")
      return
    }

    const caseStudyName = target
      .closest<HTMLElement>("[data-name^='Case card/']")
      ?.dataset.name?.slice("Case card/".length)
    const route =
      name === "CTA/Case"
        ? (routeForLabel(caseStudyName ?? "") ?? "/work")
        : name === "CTA/Process"
          ? "/about"
          : routeForLabel(
              name.startsWith("Card/")
                ? name.slice(5)
                : name.startsWith("Row/")
                  ? name.slice(4)
                  : label,
            )
    if (route) {
      event.preventDefault()
      router.push(route)
    }
  }

  return (
    <div className="route-shell" key={pathname} onClickCapture={handleClick}>
      {children}
      <nav aria-label="Mobile navigation" className="mobile-nav">
        <Link
          className={pathname.startsWith("/work") ? "is-active" : ""}
          href="/work"
        >
          Work
        </Link>
        <Link
          className={pathname === "/about" ? "is-active" : ""}
          href="/about"
        >
          About
        </Link>
        <Link
          className={pathname === "/contact" ? "is-active" : ""}
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}
