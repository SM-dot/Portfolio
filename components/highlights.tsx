export function Highlights() {
  const highlights = [
    {
      icon: "⚡",
      title: "Python",
      technologies: ["Django", "FastAPI", "NumPy", "Pandas"],
    },
    {
      icon: "🧩",
      title: "Problem Solving",
      technologies: ["Algorithms", "Data Structures", "System Design", "Optimization"],
    },
    {
      icon: "💡",
      title: "Innovation",
      technologies: ["Research", "Prototyping", "Creative Thinking", "Future Tech"],
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Highlights</h2>
          <p className="text-gray-400 text-lg">Core strengths that drive my success</p>
        </div>

        {/* Horizontal layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex-1 group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 h-full">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 text-white">{highlight.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {highlight.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-sm text-gray-200 hover:bg-white/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
