"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const caseStudies = [
  {
    name: "AI Face Aging",

    category: "Mobile app · AI",

    description: "See your future self with an AI-powered aging experience.",

    image: "/assets/9b1d5.png",

    href: "/work",

    tone: "rose",
  },

  {
    name: "Maisonette",

    category: "SaaS · Real estate",

    description: "A luxury estate command center for property teams.",

    image: "/assets/9204a.png",

    href: "/work",

    tone: "blue",
  },

  {
    name: "Freelance Ops",

    category: "Mobile app · Fintech",

    description: "Practical business tools built for freelancers.",

    image: "/assets/aa772.png",

    href: "/work",

    tone: "peach",
  },

  {
    name: "Zorvex",

    category: "Website · Fintech & AI",

    description:
      "An AI-powered finance website with a distinctive visual system.",

    image: "/assets/5e54e.png",

    href: "/work",

    tone: "yellow",
  },

  {
    name: "Vigil",

    category: "B2B SaaS · Safety",

    description: "A safety command platform for control-room operators.",

    image: "/assets/1da72.png",

    href: "/work/vigil",

    tone: "lilac",
  },
]

export default function FeaturedCaseStudies() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [revealEnabled, setRevealEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    setRevealEnabled(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-labelledby="more-case-studies" className="featured-cases">
      <div className="featured-cases__heading">
        <div>
          <p className="featured-cases__eyebrow">(More selected work)</p>
          <h2 id="more-case-studies">A few more things I&apos;ve worked on.</h2>
        </div>
        <Link className="featured-cases__all" href="/work">
          All case studies <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div
        className={`featured-cases__grid ${isVisible ? "is-visible" : ""}`}
        data-reveal-enabled={revealEnabled ? "true" : undefined}
        ref={gridRef}
      >
        {caseStudies.map((study, index) => (
          <Link
            aria-label={`View ${study.name} in all case studies`}
            className={`featured-case featured-case--${study.tone}`}
            data-name={`Case card/${study.name}`}
            href={study.href}
            key={study.name}
          >
            <div className="featured-case__image">
              <img alt="" loading="lazy" src={study.image} />
              <span className="featured-case__number">
                {String(index + 2).padStart(2, "0")}
              </span>
            </div>
            <div className="featured-case__content">
              <span className="featured-case__category">{study.category}</span>
              <h3>{study.name}</h3>
              <p>{study.description}</p>
              <span aria-hidden="true" className="featured-case__arrow">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
