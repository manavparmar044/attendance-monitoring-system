"use client"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Clock } from "lucide-react"

function Header() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetStarted = () => {
    router.push("/dashboard")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">AttendanceHub</h1>
              <p className="text-xs text-slate-600 hidden sm:block">Smart Monitoring System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Features
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleGetStarted}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="pt-4 space-y-3">
            <a
              href="#features"
              className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
