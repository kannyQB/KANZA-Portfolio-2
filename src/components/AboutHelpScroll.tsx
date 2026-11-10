"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// End par rukna (0.15 = 15%). Zyada rukna ho to 0.25 / 0.3
const END_HOLD_RATIO = 0.15
// Scroll smoothing. true = bilkul direct
const SCRUB = 0.5
// Last card ke baad right side ka gap (px)
const END_GAP = 100

const TILTS: Record<string, number> = {
  "rotate-4": 4,
  "-rotate-3": -3,
  "rotate-2": 2,
  "-rotate-2": -2,
}

const getTilt = (el: Element) => {
  for (const key of Object.keys(TILTS)) {
    if (el.classList.contains(key)) return TILTS[key]
  }
  return 0
}

type AboutHelpScrollProps = {
  children: ReactNode
  className: string
  "data-name": string
  "data-node-id": string
}

export default function AboutHelpScroll({
  children,
  className,
  "data-name": dataName,
  "data-node-id": dataNodeId,
}: AboutHelpScrollProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const outer = outerRef.current
    const sticky = stickyRef.current
    const track = sticky?.querySelector<HTMLElement>(".about-help-track")
    if (!outer || !sticky || !track) return

    const media = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    )
    const tiltedCards = Array.from(
      track.querySelectorAll<HTMLElement>(
        "[class~='rotate-4'], [class~='-rotate-3'], [class~='rotate-2'], [class~='-rotate-2']",
      ),
    )

    let context: gsap.Context | undefined
    let active = true
    let resizeTimer: number | undefined

    const clearLayout = () => {
      outer.style.removeProperty("height")
      sticky.style.removeProperty("position")
      sticky.style.removeProperty("top")
      sticky.style.removeProperty("height")
      sticky.style.removeProperty("min-height")
      tiltedCards.forEach((c) => c.style.removeProperty("rotate"))
    }

    const getDistance = () => {
      const styles = window.getComputedStyle(sticky)
      const leftPadding = Number.parseFloat(styles.paddingLeft) || 0
      return Math.max(
        0,
        track.scrollWidth + leftPadding + END_GAP - sticky.clientWidth,
      )
    }
    const getTotalDistance = () => getDistance() / (1 - END_HOLD_RATIO)

    const setup = () => {
      context?.revert()
      context = undefined
      clearLayout()
      if (!active || !media.matches) return

      // Native sticky: koi pin-spacer nahi
      sticky.style.position = "sticky"
      sticky.style.top = "0px"
      sticky.style.height = "100vh"
      sticky.style.minHeight = "900px"
      tiltedCards.forEach((c) => {
        c.style.rotate = "none" // Tailwind rotate ko GSAP ke liye band
      })

      const setOuterHeight = () => {
        outer.style.height = `${sticky.offsetHeight + getTotalDistance()}px`
      }
      setOuterHeight()

      context = gsap.context(() => {
        gsap.set(track, { force3D: true })
        gsap.set(tiltedCards, {
          rotation: (_i: number, el: Element) => getTilt(el),
          force3D: true,
        })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: outer,
            start: "top top",
            end: () => `+=${getTotalDistance()}`,
            scrub: SCRUB,
            invalidateOnRefresh: true,
            onRefreshInit: setOuterHeight,
          },
        })

        timeline.to(
          track,
          { x: () => -getDistance(), duration: 1 - END_HOLD_RATIO, ease: "none" },
          0,
        )
        if (tiltedCards.length) {
          timeline.to(
            tiltedCards,
            { rotation: 0, duration: 1 - END_HOLD_RATIO, ease: "none" },
            0,
          )
        }
        timeline.to({}, { duration: END_HOLD_RATIO }) // end hold
      }, outer)

      ScrollTrigger.refresh()
    }

    const refresh = () => {
      if (active && media.matches) ScrollTrigger.refresh()
    }
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(setup, 150)
    }
    const onMediaChange = () => setup()

    const images = Array.from(sticky.querySelectorAll("img"))

    setup()
    void document.fonts.ready.then(refresh)
    images.forEach((img) => img.addEventListener("load", refresh))
    window.addEventListener("resize", onResize)
    media.addEventListener("change", onMediaChange)

    return () => {
      active = false
      window.clearTimeout(resizeTimer)
      images.forEach((img) => img.removeEventListener("load", refresh))
      window.removeEventListener("resize", onResize)
      media.removeEventListener("change", onMediaChange)
      context?.revert()
      clearLayout()
    }
  }, [])

  return (
    <div
      ref={outerRef}
      data-name={dataName}
      data-node-id={dataNodeId}
      className="relative w-full shrink-0"
    >
      <div ref={stickyRef} className={className}>
        {children}
      </div>
    </div>
  )
}