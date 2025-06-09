"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { BinaryMatrix } from "@/components/binary-matrix"
import { Footer } from "@/components/footer"

export default function Contact() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "syonamehraa@gmail.com",
      description: "Best for detailed discussions and project inquiries",
      action: () => window.open("mailto:syonaa.mehra@example.com"),
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/syonaa-mehra",
      description: "Professional networking and career opportunities",
      action: () => window.open("https://linkedin.com/in/syonaa-mehra", "_blank"),
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/syonaa",
      description: "Explore my code repositories and contributions",
      action: () => window.open("https://github.com/syonaa", "_blank"),
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "For urgent matters and direct conversations",
      action: () => window.open("tel:+15551234567"),
    },
  ]

  const availability = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM PST", status: "Available" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM PST", status: "Limited" },
    { day: "Sunday", time: "Closed", status: "Unavailable" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BinaryMatrix cursorPosition={cursorPosition} />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 text-white">Let's Connect</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to collaborate on your next project? I'm always excited to discuss new opportunities, innovative
                ideas, and challenging problems to solve.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} onClick={method.action} className="group cursor-pointer relative">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                      <span className="text-4xl">{method.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                        <p className="text-gray-300 text-lg mb-2">{method.value}</p>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      </div>
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Schedule */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Availability</h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    {availability.map((slot, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
                      >
                        <div>
                          <div className="text-white font-medium">{slot.day}</div>
                          <div className="text-gray-400 text-sm">{slot.time}</div>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            slot.status === "Available"
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : slot.status === "Limited"
                                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                : "bg-red-500/20 text-red-300 border border-red-500/30"
                          }`}
                        >
                          {slot.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Timezone */}
            <div className="text-center">
              <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📍</span>
                    <span className="text-gray-300">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🕐</span>
                    <span className="text-gray-300">Pacific Standard Time (PST)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🌍</span>
                    <span className="text-gray-300">Open to remote collaboration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Something Amazing?</h3>
                <p className="text-gray-300 mb-6">
                  Whether it's a complex automation project, AI implementation, or innovative software solution, I'm
                  here to help bring your ideas to life.
                </p>
                <button
                  onClick={() => window.open("mailto:syonaa.mehra@example.com")}
                  className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium text-lg transform hover:scale-105"
                >
                  Start the Conversation
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
