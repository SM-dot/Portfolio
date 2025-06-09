import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
          <p className="text-gray-400 mb-6">Ready to collaborate on your next project?</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
          <a
            href="https://github.com/SM-dot"
            className="px-6 py-3 border border-white/30 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/syonaa-mehra-aa9819215/"
            className="px-6 py-3 border border-white/30 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          <p>&copy; 2024 Syonaa Mehra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
