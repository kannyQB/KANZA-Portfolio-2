"use client"

import { useCallback, useState } from "react"

export default function useSlider(initialPosition = 50) {
  const [position, setPosition] = useState(initialPosition)

  const updatePosition = useCallback((nextPosition: number) => {
    setPosition(Math.min(100, Math.max(0, nextPosition)))
  }, [])

  return { position, updatePosition }
}
