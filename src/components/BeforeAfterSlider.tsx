"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"

import useSlider from "@/hooks/use-slider"

type BeforeAfterSliderProps = {
  before: string

  after: string

  beforeLabel?: string

  afterLabel?: string

  aspectRatio?: number

  ariaLabel?: string
}

const HANDLE_SIZE = 32

export default function BeforeAfterSlider({
  before,

  after,

  beforeLabel = "Wireframe",

  afterLabel = "Final UI",

  aspectRatio = 600 / 513,

  ariaLabel = "Compare the wireframe with the final interface",
}: BeforeAfterSliderProps) {
  const { position, updatePosition } = useSlider(100)

  const sliderRef = useRef<HTMLDivElement>(null)
  const hasInteractedRef = useRef(false)
  const introStartedRef = useRef(false)
  const [isIntroAnimating, setIsIntroAnimating] = useState(false)

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      updatePosition(50)
      return
    }

    let animationFrame: number | null = null
    let animationTimeout: number | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || introStartedRef.current) return

        introStartedRef.current = true
        observer.disconnect()

        if (hasInteractedRef.current) return

        setIsIntroAnimating(true)
        animationFrame = window.requestAnimationFrame(() => {
          if (!hasInteractedRef.current) updatePosition(50)
        })
        animationTimeout = window.setTimeout(
          () => setIsIntroAnimating(false),
          1500,
        )
      },
      { threshold: 0.35 },
    )

    observer.observe(slider)

    return () => {
      observer.disconnect()
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
      if (animationTimeout !== null) window.clearTimeout(animationTimeout)
    }
  }, [updatePosition])

  function moveSlider(clientX: number) {
    const bounds = sliderRef.current?.getBoundingClientRect()

    if (!bounds || bounds.width === 0) return

    updatePosition(((clientX - bounds.left) / bounds.width) * 100)
  }

  function handleSliderKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const increments: Record<string, number> = {
      ArrowLeft: -1,
      ArrowDown: -1,
      ArrowRight: 1,
      ArrowUp: 1,
      PageDown: -10,
      PageUp: 10,
    }

    if (event.key === "Home") {
      event.preventDefault()
      hasInteractedRef.current = true
      setIsIntroAnimating(false)
      updatePosition(0)
    } else if (event.key === "End") {
      event.preventDefault()
      hasInteractedRef.current = true
      setIsIntroAnimating(false)
      updatePosition(100)
    } else if (increments[event.key]) {
      event.preventDefault()
      hasInteractedRef.current = true
      setIsIntroAnimating(false)
      updatePosition(position + increments[event.key])
    }
  }

  return (
    <div
      ref={sliderRef}
      aria-label={ariaLabel}
      className={`comparison-slider relative w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[24px] focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#7a0d3b] ${
        isIntroAnimating ? "comparison-slider--intro" : ""
      }`}
      data-name="Before and after slider"
      onPointerDown={(event) => {
        hasInteractedRef.current = true
        setIsIntroAnimating(false)
        event.currentTarget.setPointerCapture(event.pointerId)

        moveSlider(event.clientX)
      }}
      onPointerMove={(event) => {
        if (event.buttons === 1) {
          hasInteractedRef.current = true
          moveSlider(event.clientX)
        }
      }}
      style={{ aspectRatio }}
    >
      <img
        alt={afterLabel}
        className="comparison-slider__image pointer-events-none absolute inset-0 size-full object-cover"
        draggable={false}
        src={after}
      />
      <div
        aria-hidden="true"
        className="comparison-slider__before pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          alt=""
          className="comparison-slider__before-image absolute inset-0 size-full object-cover"
          draggable={false}
          src={before}
        />
      </div>
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs text-[#1a0e14] shadow-[0_3.5px_10.4px_rgba(0,0,0,0.08)]">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white px-3 py-2 text-xs text-[#1a0e14] shadow-[0_3.5px_10.4px_rgba(0,0,0,0.08)]">
        {afterLabel}
      </span>
      <div
        className="comparison-slider__marker pointer-events-none absolute inset-y-0 z-[1]"
        style={{ left: `${position}%`, width: 0 }}
      >
        <span
          aria-hidden="true"
          className="comparison-slider__divider absolute inset-y-0 bg-[#7a0d3b]"
          style={{ left: -1, width: 2, transform: "none" }}
        />
        <button
          aria-label="Move comparison slider"
          aria-orientation="horizontal"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% of the wireframe is visible`}
          className="comparison-slider__handle pointer-events-auto absolute z-[2] flex items-center justify-center rounded-full border-[2px] border-white bg-[#7a0d3b] text-xs text-white shadow-[0_3px_10px_rgba(26,14,20,0.22)]"
          onKeyDown={handleSliderKeyDown}
          role="slider"
          style={{
            left: -HANDLE_SIZE / 2,
            top: "50%",
            marginTop: -HANDLE_SIZE / 2,
            width: HANDLE_SIZE,
            height: HANDLE_SIZE,
            transform: "none",
          }}
          type="button"
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="22"
            viewBox="0 0 24 24"
            width="22"
          >
            <path
              d="m8 8-4 4 4 4M4 12h16m-4-4 4 4-4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}