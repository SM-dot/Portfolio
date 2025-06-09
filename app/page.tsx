"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { BinaryMatrix } from "@/components/binary-matrix"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BinaryMatrix cursorPosition={cursorPosition} />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Highlights />
        <Footer />
      </div>
    </div>
  )
}
