"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  angle: number
  speed: number
  opacity: number
}

export function NorthernLights() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const shootingStarsRef = useRef<ShootingStar[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          // Only 20% of stars twinkle, and they twinkle much slower
          twinkleSpeed: Math.random() < 0.2 ? Math.random() * 0.005 + 0.002 : 0,
        })
      }
      starsRef.current = stars
    }

    const createShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStarsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 20,
          angle: (Math.random() * Math.PI) / 4 + Math.PI / 4,
          speed: Math.random() * 6 + 4,
          opacity: 1,
        })
      }
    }

    const drawNorthernLights = (time: number) => {
      // Only show northern lights in the darker sections
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const lightsOpacity = Math.max(0, (scrollProgress - 0.4) * 2)

      if (lightsOpacity <= 0) return

      // Make aurora much taller - covering more of the screen
      const centerY = canvas.height * 0.5
      const auroraHeight = canvas.height * 0.8 // Increased from 0.4 to 0.8

      // Create a large background glow that blends with the dark background
      const backgroundGlow = ctx.createRadialGradient(
        canvas.width * 0.5,
        centerY,
        0,
        canvas.width * 0.5,
        centerY,
        Math.max(canvas.width, canvas.height) * 0.8,
      )

      const baseWave = Math.sin(time * 0.0005) * 0.2 + 0.3
      backgroundGlow.addColorStop(0, `rgba(6, 78, 59, ${lightsOpacity * 0.15 * baseWave})`) // Dark green center
      backgroundGlow.addColorStop(0.3, `rgba(5, 46, 22, ${lightsOpacity * 0.08 * baseWave})`) // Very dark green
      backgroundGlow.addColorStop(0.6, `rgba(3, 24, 12, ${lightsOpacity * 0.04 * baseWave})`) // Almost black green
      backgroundGlow.addColorStop(1, `rgba(0, 0, 0, 0)`) // Transparent

      ctx.fillStyle = backgroundGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Main aurora gradient - taller and more blended
      const mainGradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        centerY,
        0,
        canvas.width * 0.5,
        centerY,
        auroraHeight * 0.7,
      )

      const wave = Math.sin(time * 0.0008) * 0.3 + 0.7
      mainGradient.addColorStop(0, `rgba(34, 197, 94, ${lightsOpacity * 0.25 * wave})`) // Bright green center
      mainGradient.addColorStop(0.2, `rgba(16, 185, 129, ${lightsOpacity * 0.2 * wave})`) // Teal-green
      mainGradient.addColorStop(0.4, `rgba(5, 150, 105, ${lightsOpacity * 0.15 * wave})`) // Darker green
      mainGradient.addColorStop(0.7, `rgba(6, 78, 59, ${lightsOpacity * 0.08 * wave})`) // Very dark green
      mainGradient.addColorStop(1, `rgba(0, 0, 0, 0)`) // Transparent edge for better blending

      ctx.fillStyle = mainGradient
      ctx.fillRect(0, centerY - auroraHeight / 2, canvas.width, auroraHeight)

      // Create taller flowing horizontal aurora bands
      for (let band = 0; band < 4; band++) {
        const phase = time * 0.0006 + (band * Math.PI) / 4
        const bandY = centerY + (band - 1.5) * 120 // Spread bands more vertically
        const bandHeight = 120 + Math.sin(phase) * 30 // Taller bands

        // Create flowing shape for each band
        ctx.beginPath()

        const points = []
        for (let x = 0; x <= canvas.width; x += 15) {
          const wave1 = Math.sin(x * 0.002 + phase) * 40
          const wave2 = Math.cos(x * 0.003 + phase * 1.2) * 20
          const wave3 = Math.sin(x * 0.001 + phase * 0.8) * 15 // Additional wave for complexity
          const y = bandY + wave1 + wave2 + wave3
          points.push({ x, y })
        }

        // Draw top curve
        ctx.moveTo(0, points[0].y - bandHeight / 2)
        for (let i = 1; i < points.length; i++) {
          const cp1x = points[i - 1].x + 7
          const cp1y = points[i - 1].y - bandHeight / 2
          const cp2x = points[i].x - 7
          const cp2y = points[i].y - bandHeight / 2
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, points[i].x, points[i].y - bandHeight / 2)
        }

        // Draw bottom curve (reversed)
        for (let i = points.length - 1; i >= 0; i--) {
          const cp1x = points[i].x + 7
          const cp1y = points[i].y + bandHeight / 2
          const cp2x = i > 0 ? points[i - 1].x - 7 : 0
          const cp2y = i > 0 ? points[i - 1].y + bandHeight / 2 : points[0].y + bandHeight / 2
          if (i === points.length - 1) {
            ctx.lineTo(points[i].x, points[i].y + bandHeight / 2)
          } else {
            ctx.bezierCurveTo(
              cp1x,
              cp1y,
              cp2x,
              cp2y,
              i > 0 ? points[i - 1].x : 0,
              i > 0 ? points[i - 1].y + bandHeight / 2 : points[0].y + bandHeight / 2,
            )
          }
        }

        ctx.closePath()

        // Create gradient for this specific band with better blending
        const bandGradient = ctx.createLinearGradient(0, bandY - bandHeight / 2, 0, bandY + bandHeight / 2)

        const intensity = (Math.sin(phase * 1.3) * 0.4 + 0.6) * lightsOpacity
        const greenIntensity = intensity * (0.6 - band * 0.1) // More subtle intensity variation

        bandGradient.addColorStop(0, `rgba(34, 197, 94, 0)`) // Transparent edges
        bandGradient.addColorStop(0.1, `rgba(34, 197, 94, ${greenIntensity * 0.1})`)
        bandGradient.addColorStop(0.3, `rgba(34, 197, 94, ${greenIntensity * 0.4})`)
        bandGradient.addColorStop(0.5, `rgba(16, 185, 129, ${greenIntensity * 0.6})`) // Peak intensity
        bandGradient.addColorStop(0.7, `rgba(34, 197, 94, ${greenIntensity * 0.4})`)
        bandGradient.addColorStop(0.9, `rgba(34, 197, 94, ${greenIntensity * 0.1})`)
        bandGradient.addColorStop(1, `rgba(34, 197, 94, 0)`) // Transparent edges

        ctx.fillStyle = bandGradient
        ctx.fill()
      }

    //   // Add taller vertical aurora curtains with better blending
    //   for (let curtain = 0; curtain < 6; curtain++) {
    //     const x = (canvas.width / 7) * (curtain + 1) + Math.sin(time * 0.0005 + curtain) * 80
    //     const curtainHeight = canvas.height * 0.6 // Much taller curtains
    //     const curtainGradient = ctx.createLinearGradient(
    //       x - 40,
    //       centerY - curtainHeight / 2,
    //       x + 40,
    //       centerY + curtainHeight / 2,
    //     )

    //     const curtainIntensity = (Math.sin(time * 0.0007 + (curtain * Math.PI) / 3) * 0.3 + 0.4) * lightsOpacity * 0.2

    //     curtainGradient.addColorStop(0, `rgba(34, 197, 94, 0)`)
    //     curtainGradient.addColorStop(0.2, `rgba(34, 197, 94, ${curtainIntensity * 0.3})`)
    //     curtainGradient.addColorStop(0.4, `rgba(34, 197, 94, ${curtainIntensity * 0.8})`)
    //     curtainGradient.addColorStop(0.6, `rgba(16, 185, 129, ${curtainIntensity})`)
    //     curtainGradient.addColorStop(0.8, `rgba(34, 197, 94, ${curtainIntensity * 0.6})`)
    //     curtainGradient.addColorStop(1, `rgba(34, 197, 94, 0)`)

    //     // Create a radial gradient for width blending
    //     const curtainRadial = ctx.createRadialGradient(x, centerY, 0, x, centerY, 60)
    //     curtainRadial.addColorStop(0, `rgba(34, 197, 94, ${curtainIntensity})`)
    //     curtainRadial.addColorStop(0.7, `rgba(16, 185, 129, ${curtainIntensity * 0.6})`)
    //     curtainRadial.addColorStop(1, `rgba(34, 197, 94, 0)`)

    //     ctx.fillStyle = curtainRadial
    //     ctx.fillRect(x - 60, centerY - curtainHeight / 2, 120, curtainHeight)
    //   }

      // Add subtle atmospheric glow at the edges for better blending
      const edgeGradientTop = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.3)
      edgeGradientTop.addColorStop(0, `rgba(6, 78, 59, ${lightsOpacity * 0.05})`)
      edgeGradientTop.addColorStop(1, `rgba(6, 78, 59, 0)`)
      ctx.fillStyle = edgeGradientTop
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.3)

      const edgeGradientBottom = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height)
      edgeGradientBottom.addColorStop(0, `rgba(6, 78, 59, 0)`)
      edgeGradientBottom.addColorStop(1, `rgba(6, 78, 59, ${lightsOpacity * 0.05})`)
      ctx.fillStyle = edgeGradientBottom
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3)
    }

    const drawStars = (time: number) => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const starsOpacity = Math.max(0, (scrollProgress - 0.3) * 1.5)

      if (starsOpacity <= 0) return

      starsRef.current.forEach((star) => {
        // Only apply twinkle effect if the star has a twinkle speed
        const twinkle = star.twinkleSpeed > 0 ? Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7 : 1
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle * starsOpacity})`
        ctx.fill()
      })
    }

    const drawShootingStars = () => {
      shootingStarsRef.current.forEach((star, index) => {
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length,
        )

        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x - Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length)
        ctx.stroke()

        // Update shooting star position
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.opacity -= 0.01

        // Remove if off screen or faded
        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStarsRef.current.splice(index, 1)
        }
      })
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawNorthernLights(time)
      drawStars(time)
      createShootingStar()
      drawShootingStars()

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    animate(0)

    window.addEventListener("resize", () => {
      resizeCanvas()
      createStars()
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "screen" }} />
}
