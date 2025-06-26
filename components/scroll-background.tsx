"use client"

import { useEffect, useState } from "react"

export function ScrollBackground() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getBackgroundStyle = () => {
    // Smooth color interpolation function
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    // Smooth easing function for more natural transitions
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    // Apply easing to scroll progress for smoother transitions
    const easedProgress = easeInOutCubic(scrollProgress)

    // Define color stops throughout the scroll journey
    let topR, topG, topB, midR, midG, midB, bottomR, bottomG, bottomB

    if (easedProgress <= 0.25) {
      // Earth tones to warm sunset transition (inspired by Ghibli landscape)
      const factor = easedProgress / 0.25
      topR = lerp(220, 220, factor) // Warm peachy-golden to sunset orange
      topG = lerp(200, 180, factor) // Golden to sunset amber
      topB = lerp(170, 150, factor) // Soft earth to sunset warmth

      midR = lerp(210, 200, factor) // Muted golden to deeper sunset
      midG = lerp(190, 160, factor) // Earth amber to sunset red
      midB = lerp(150, 120, factor) // Soft brown to sunset depth

      bottomR = lerp(200, 180, factor) // Deep earth to sunset base
      bottomG = lerp(180, 140, factor) // Warm brown to sunset shadow
      bottomB = lerp(140, 100, factor) // Rich earth to sunset darkness
    } else if (easedProgress <= 0.5) {
      // Warm sunset to purple twilight
      const factor = (easedProgress - 0.25) / 0.25
      topR = lerp(220, 150, factor)
      topG = lerp(180, 100, factor)
      topB = lerp(150, 180, factor)

      midR = lerp(200, 120, factor)
      midG = lerp(160, 80, factor)
      midB = lerp(120, 160, factor)

      bottomR = lerp(180, 100, factor)
      bottomG = lerp(140, 60, factor)
      bottomB = lerp(100, 140, factor)
    } else if (easedProgress <= 0.75) {
      // Purple twilight to deep night
      const factor = (easedProgress - 0.5) / 0.25
      topR = lerp(150, 60, factor)
      topG = lerp(100, 40, factor)
      topB = lerp(180, 80, factor)

      midR = lerp(120, 40, factor)
      midG = lerp(80, 30, factor)
      midB = lerp(160, 60, factor)

      bottomR = lerp(100, 25, factor)
      bottomG = lerp(60, 20, factor)
      bottomB = lerp(140, 45, factor)
    } else {
      // Deep night to darkest night with green tint
      const factor = (easedProgress - 0.75) / 0.25
      topR = lerp(60, 15, factor)
      topG = lerp(40, 25, factor)
      topB = lerp(80, 35, factor)

      midR = lerp(40, 20, factor)
      midG = lerp(30, 35, factor)
      midB = lerp(60, 45, factor)

      bottomR = lerp(25, 8, factor)
      bottomG = lerp(20, 20, factor)
      bottomB = lerp(45, 25, factor)
    }

    return {
      background: `linear-gradient(180deg,
      rgb(${Math.round(topR)}, ${Math.round(topG)}, ${Math.round(topB)}) 0%,
      rgb(${Math.round(midR)}, ${Math.round(midG)}, ${Math.round(midB)}) 50%,
      rgb(${Math.round(bottomR)}, ${Math.round(bottomG)}, ${Math.round(bottomB)}) 100%
    )`,
      transition: "background 0.1s ease-out",
    }
  }

  return <div className="fixed inset-0 transition-all duration-1000 ease-out" style={getBackgroundStyle()} />
}
