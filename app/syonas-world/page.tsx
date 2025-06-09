"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { BinaryMatrix } from "@/components/binary-matrix"
import { Footer } from "@/components/footer"

export default function SyonasWorld() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects = [
    {
      name: "FinanceFlow AI",
      description: "Automated finance workflow system that reduced processing time by 85%",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      link: "https://github.com/syonaa/financeflow-ai",
      type: "github",
    },
    {
      name: "VehicleVision FSM",
      description: "Finite State Machine implementation for autonomous vehicle control",
      tech: ["C", "Python", "Embedded Systems"],
      link: "https://github.com/syonaa/vehiclevision-fsm",
      type: "github",
    },
    {
      name: "Neural Optimizer",
      description: "Research project on neural network optimization techniques",
      tech: ["Python", "PyTorch", "CUDA"],
      link: "/projects/neural-optimizer",
      type: "internal",
    },
    {
      name: "DataPipeline Pro",
      description: "End-to-end ML pipeline for real-time data processing",
      tech: ["Python", "Apache Kafka", "TensorFlow"],
      link: "https://github.com/syonaa/datapipeline-pro",
      type: "github",
    },
    {
      name: "SmartAnalytics Dashboard",
      description: "Interactive dashboard for business intelligence and analytics",
      tech: ["React", "Python", "D3.js"],
      link: "/projects/smart-analytics",
      type: "internal",
    },
  ]

  const handleProjectClick = (project: (typeof projects)[0]) => {
    if (project.type === "github") {
      window.open(project.link, "_blank", "noopener,noreferrer")
    } else {
      // For internal projects, you could navigate to a detailed project page
      console.log(`Navigate to ${project.link}`)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BinaryMatrix cursorPosition={cursorPosition} />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-white">Syona's World</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore my digital universe of innovative projects, creative solutions, and technological adventures.
              </p>
            </div>

            {/* Alternating Tiles Layout */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-sm text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
                    >
                      {project.type === "github" ? "View on GitHub" : "Explore Project"}
                      <span className="ml-2">→</span>
                    </button>
                  </div>

                  {/* Project Visual */}
                  <div className="flex-1">
                    <div className="relative group cursor-pointer" onClick={() => handleProjectClick(project)}>
                      <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">{project.type === "github" ? "🔗" : "🚀"}</div>
                          <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                          <p className="text-gray-400 text-sm">Click to explore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 p-8 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Want to collaborate?</h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on new projects and explore innovative ideas.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
              >
                Let's Build Something Amazing
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
