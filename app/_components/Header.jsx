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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
          : "bg-white/5 backdrop-blur-lg"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Glass overlay for enhanced effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1665a0] to-[#0f5487] rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight drop-shadow-sm">
                AttendanceHub
              </h1>
              <p className="text-xs text-slate-700 hidden sm:block drop-shadow-sm">Smart Monitoring System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-800 hover:text-[#1665a0] font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm"
            >
              Features
              <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-[#1665a0] transition-all duration-300 group-hover:w-[calc(100%-24px)] rounded-full"></span>
            </a>
            <a
              href="#about"
              className="text-slate-800 hover:text-[#1665a0] font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm"
            >
              About
              <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-[#1665a0] transition-all duration-300 group-hover:w-[calc(100%-24px)] rounded-full"></span>
            </a>
            <a
              href="#contact"
              className="text-slate-800 hover:text-[#1665a0] font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm"
            >
              Contact
              <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-[#1665a0] transition-all duration-300 group-hover:w-[calc(100%-24px)] rounded-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
          <button
  onClick={handleGetStarted}
  className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#1665a0] to-[#0f5487] text-white font-semibold rounded-full hover:from-[#0f5487] hover:to-[#0e4e7d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/30"
>
  Get Started
</button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-800" />
              ) : (
                <Menu className="h-6 w-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {/* Glass panel for mobile menu */}
          <div className="mt-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg shadow-black/5 p-4">
            <nav className="space-y-2">
              <a
                href="#features"
                className="block px-4 py-3 text-slate-800 hover:text-[#1665a0] hover:bg-white/20 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-slate-800 hover:text-[#1665a0] hover:bg-white/20 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-slate-800 hover:text-[#1665a0] hover:bg-white/20 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>

              {/* Mobile CTA */}
              <div className="pt-3 mt-3 border-t border-white/20">
  <button
    onClick={() => {
      handleGetStarted()
      setIsMobileMenuOpen(false)
    }}
    className="w-full px-4 py-3 bg-gradient-to-r from-[#1665a0] to-[#0f5487] text-white font-semibold rounded-xl hover:from-[#0f5487] hover:to-[#0e4e7d] transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20"
  >
    Get Started
  </button>
</div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
