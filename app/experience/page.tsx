"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { BinaryMatrix } from "@/components/binary-matrix"
import { Footer } from "@/components/footer"

export default function Experience() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const workExperience = [
    {
      title: "Senior Python Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of 7 automated finance workflows, reducing processing time by 85%. Implemented FSM-based vehicle control systems using Python and C.",
      technologies: ["Python", "C", "FastAPI", "PostgreSQL", "Docker"],
      impact: "85% efficiency increase",
      icon: "🚀",
    },
    {
      title: "AI Engineer",
      company: "Innovation Labs",
      period: "2020 - 2022",
      description:
        "Developed machine learning models for predictive analytics and natural language processing applications. Built end-to-end ML pipelines.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS"],
      impact: "3 ML models deployed",
      icon: "🤖",
    },
  ]

  const researchExperience = [
    {
      title: "Research Assistant - Machine Learning",
      company: "Stanford AI Lab",
      period: "2021 - 2022",
      description:
        "Conducted research on neural network optimization and published findings on improving training efficiency for large-scale models.",
      technologies: ["Python", "PyTorch", "CUDA", "Research"],
      impact: "2 publications",
      icon: "🔬",
    },
    {
      title: "Undergraduate Researcher",
      company: "UC Berkeley Computer Vision Lab",
      period: "2020 - 2021",
      description:
        "Developed novel computer vision algorithms for autonomous vehicle perception systems. Contributed to 3 peer-reviewed publications.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
      impact: "3 peer-reviewed papers",
      icon: "👁️",
    },
  ]

  const awards = [
    {
      title: "Best Innovation Award",
      organization: "TechCrunch Disrupt",
      year: "2023",
      description:
        "Recognized for developing an AI-powered finance automation platform that revolutionized workflow efficiency.",
      icon: "🏆",
    },
    {
      title: "Outstanding Research Paper",
      organization: "IEEE Conference on AI",
      year: "2022",
      description:
        "Published research on neural network optimization techniques with significant performance improvements.",
      icon: "📄",
    },
    {
      title: "Dean's List",
      organization: "University of California, Berkeley",
      year: "2019-2021",
      description: "Maintained exceptional academic performance throughout undergraduate studies.",
      icon: "🎓",
    },
  ]

  const sections = [
    { title: "Work Experience", data: workExperience, color: "white" },
    { title: "Research Experience", data: researchExperience, color: "gray-300" },
    { title: "Awards", data: awards, color: "gray-400" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BinaryMatrix cursorPosition={cursorPosition} />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 text-white">Experience Journey</h1>
              <p className="text-xl text-gray-300">Navigate through my professional evolution</p>
            </div>

            {/* Interactive Section Selector */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-4 bg-white/5 rounded-full p-2 backdrop-blur-sm">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      activeSection === index ? "bg-white text-black" : "text-white hover:bg-white/10"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Display */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20 hidden lg:block" />

              <div className="space-y-8">
                {sections[activeSection].data.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "slideInFromRight 0.6s ease-out forwards",
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-8 w-4 h-4 bg-white rounded-full border-4 border-black z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300" />

                    {/* Content Card */}
                    <div className="lg:ml-20 relative">
                      <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 transform hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="text-4xl">{item.icon}</span>
                            <div>
                              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                              <h4 className="text-lg text-gray-300">
                                {activeSection === 2 ? item.organization : item.company}
                              </h4>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-400 text-sm">
                              {activeSection === 2 ? item.year : item.period}
                            </span>
                            {item.impact && (
                              <div className="mt-2 px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                                {item.impact}
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                        {item.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-sm text-gray-200 hover:bg-white/10 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">7+</div>
                <div className="text-gray-400 text-sm">Workflows Automated</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <div className="text-gray-400 text-sm">Efficiency Increase</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400 text-sm">Research Papers</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-gray-400 text-sm">Major Awards</div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
