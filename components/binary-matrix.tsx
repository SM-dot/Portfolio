"use client"

import { useEffect, useRef, useState } from "react"

interface BinaryMatrixProps {
  cursorPosition: { x: number; y: number }
}

export function BinaryMatrix({ cursorPosition }: BinaryMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const cellSize = 16
    const cols = Math.ceil(dimensions.width / cellSize)
    const rows = Math.ceil(dimensions.height / cellSize)

    const matrix: { value: string; opacity: number; lastUpdate: number }[][] = []

    for (let i = 0; i < rows; i++) {
      matrix[i] = []
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = {
          value: Math.random() > 0.5 ? "1" : "0",
          opacity: 0.02, // Much more hidden by default
          lastUpdate: Date.now() - Math.random() * 5000,
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${cellSize - 2}px monospace`
      ctx.textAlign = "center"

      const now = Date.now()

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * cellSize + cellSize / 2
          const y = i * cellSize + cellSize / 2

          // Calculate distance from cursor
          const distance = Math.sqrt(Math.pow(cursorPosition.x - x, 2) + Math.pow(cursorPosition.y - y, 2))
          const isNear = distance < 120

          // Update binary value occasionally
          if (now - matrix[i][j].lastUpdate > 3000 + Math.random() * 4000) {
            matrix[i][j].value = Math.random() > 0.5 ? "1" : "0"
            matrix[i][j].lastUpdate = now
          }

          // Calculate target opacity - much more dramatic difference
          let targetOpacity = 0.02 // Very hidden by default
          if (isNear) {
            const intensity = Math.max(0, 1 - distance / 120)
            targetOpacity = 0.1 + intensity * 0.8 // Much more prominent when highlighted
          }

          // Smoothly transition opacity
          matrix[i][j].opacity += (targetOpacity - matrix[i][j].opacity) * 0.15

          // Draw the binary digit with glow effect when highlighted
          if (matrix[i][j].opacity > 0.3) {
            ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
            ctx.shadowBlur = 8
          } else {
            ctx.shadowColor = "transparent"
            ctx.shadowBlur = 0
          }

          ctx.fillStyle = `rgba(255, 255, 255, ${matrix[i][j].opacity})`
          ctx.fillText(matrix[i][j].value, x, y + cellSize / 3)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [dimensions, cursorPosition])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none"
      width={dimensions.width}
      height={dimensions.height}
    />
  )
}
