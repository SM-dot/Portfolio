"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { BinaryMatrix } from "@/components/binary-matrix"
import { Footer } from "@/components/footer"

export default function FAQ() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const faqs = [
    {
      question: "What programming languages do you specialize in?",
      answer:
        "I primarily specialize in Python and C, with extensive experience in building high-performance applications, automation systems, and AI solutions. I also work with JavaScript, SQL, and various frameworks.",
    },
    {
      question: "What types of projects do you work on?",
      answer:
        "I work on a diverse range of projects including finance workflow automation, AI/ML applications, web development, system optimization, and embedded systems. I particularly enjoy solving complex, high-performance challenges.",
    },
    {
      question: "Do you work with AI and machine learning?",
      answer:
        "Yes! Applied AI is one of my core specialties. I develop machine learning models, implement deep learning solutions, work with NLP and computer vision, and build end-to-end AI pipelines.",
    },
    {
      question: "What is your experience with automation?",
      answer:
        "I have extensive experience in automation, having successfully automated 7 finance workflows that reduced processing time by 85%. I specialize in process automation, workflow optimization, and system integration.",
    },
    {
      question: "Do you work on both frontend and backend development?",
      answer:
        "While my primary expertise is in backend development and systems programming, I also have experience with full-stack development using modern frameworks like React, Next.js, and various Python web frameworks.",
    },
    {
      question: "What is your approach to problem-solving?",
      answer:
        "I believe in understanding the core problem first, then designing efficient, scalable solutions. I focus on writing clean, maintainable code and always consider performance implications, especially for high-throughput systems.",
    },
    {
      question: "Are you available for freelance or contract work?",
      answer:
        "Yes, I'm open to discussing freelance projects, contract work, and consulting opportunities. Feel free to reach out through the contact page to discuss your specific needs.",
    },
    {
      question: "What industries have you worked in?",
      answer:
        "I've worked across multiple industries including finance, automotive (vehicle control systems), technology startups, and AI/ML companies. This diverse experience helps me adapt quickly to new domains.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BinaryMatrix cursorPosition={cursorPosition} />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h1>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors duration-300 flex justify-between items-center"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <span
                      className={`transform transition-transform duration-300 ${openFAQ === index ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Have a question that's not answered here?</p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
