"use client"

import { useRef } from "react"

import useSlider from "@/hooks/use-slider"

type BeforeAfterSliderProps = {
  before: string

  after: string

  beforeLabel?: string

  afterLabel?: string

  aspectRatio?: number

  ariaLabel?: string
}

export default function BeforeAfterSlider({
  before,

  after,

  beforeLabel = "Wireframe",

  afterLabel = "Final UI",

  aspectRatio = 600 / 513,

  ariaLabel = "Compare the wireframe with the final interface",
}: BeforeAfterSliderProps) {
  const { position, updatePosition } = useSlider()

  const sliderRef = useRef<HTMLDivElement>(null)

  function moveSlider(clientX: number) {
    const bounds = sliderRef.current?.getBoundingClientRect()

    if (!bounds || bounds.width === 0) return

    updatePosition(((clientX - bounds.left) / bounds.width) * 100)
  }

  return (
    <div
      ref={sliderRef}
      aria-label={ariaLabel}
      className="comparison-slider relative w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[24px] focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#7a0d3b]"
      data-name="Before and after slider"
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId)

        moveSlider(event.clientX)
      }}
      onPointerMove={(event) => {
        if (event.buttons === 1) moveSlider(event.clientX)
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
      <span
        aria-hidden="true"
        className="comparison-slider__divider pointer-events-none absolute inset-y-0 z-[1] w-[2px] -translate-x-1/2 bg-[#7a0d3b]"
        style={{ left: `${position}%` }}
      />
      <span
        aria-hidden="true"
        className="comparison-slider__handle pointer-events-none absolute top-1/2 z-[2] flex size-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-white bg-[#7a0d3b] text-xs text-white shadow-[0_3px_10px_rgba(26,14,20,0.22)]"
        style={{ left: `${position}%` }}
      >
        ‹ ›
      </span>
      <input
        aria-label={ariaLabel}
        aria-valuetext={`${Math.round(position)}% of the wireframe is visible`}
        className="sr-only"
        max="100"
        min="0"
        onChange={(event) => updatePosition(Number(event.currentTarget.value))}
        type="range"
        value={position}
      />
    </div>
  )
}
