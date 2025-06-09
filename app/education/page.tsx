"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { BinaryMatrix } from "@/components/binary-matrix"
import { Footer } from "@/components/footer"

export default function Education() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2021 - 2023",
      gpa: "3.9/4.0",
      focus: "Artificial Intelligence & Machine Learning",
      coursework: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Reinforcement Learning",
        "AI Ethics",
      ],
      thesis: "Optimization Techniques for Large-Scale Neural Networks",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2017 - 2021",
      gpa: "3.8/4.0",
      focus: "Software Engineering & Algorithms",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
        "Discrete Mathematics",
      ],
      thesis: "Efficient Algorithms for Real-Time Data Processing",
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-CSA-2023-001",
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      credentialId: "TF-DEV-2022-456",
    },
    {
      name: "Python Institute Certified Expert",
      issuer: "Python Institute",
      year: "2021",
      credentialId: "PCEP-2021-789",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BinaryMatrix cursorPosition={cursorPosition} />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl font-bold mb-12 text-center text-white">Education</h1>

            {/* Formal Education */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/20 pb-4">Formal Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <h4 className="text-xl text-gray-300 mb-2">{edu.school}</h4>
                        <p className="text-gray-400 mb-2">Focus: {edu.focus}</p>
                        <p className="text-gray-400">GPA: {edu.gpa}</p>
                      </div>
                      <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">{edu.period}</span>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-lg font-semibold text-white mb-2">Thesis</h5>
                      <p className="text-gray-300 italic">{edu.thesis}</p>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-sm text-gray-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/20 pb-4">Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300 bg-black/50 backdrop-blur-sm"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-300 mb-2">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-2">Year: {cert.year}</p>
                    <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
