import { Clock, Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react"

function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/manav.parmar.108", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/manavparmar004/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/parmar_man63487", label: "Twitter" },
    { icon: Github, href: "https://github.com/manavparmar044", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/manav-manish-parmar-129869208/", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#0f5487] via-[#0e4e7d] to-[#1665a0] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#51cef4] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#51cef4] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-[#51cef4] to-[#1665a0] rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <Clock className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">AttendanceHub</h2>
              <p className="text-[#51cef4] text-sm font-medium">Smart Monitoring System</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#51cef4] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group backdrop-blur-sm border border-white/20 hover:border-[#51cef4]"
              >
                <social.icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Features</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Real-Time Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  System Integration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Custom Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/manav-manish-parmar-129869208/"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Meet the Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/mmparmar044/"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  System Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#51cef4] transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/70 mb-4 md:mb-0">
              © 2024 AttendanceHub by <span className="text-[#51cef4] font-medium">Manav Manish Parmar</span>. All
              rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <span className="flex items-center gap-1">
                Made with <span className="text-red-400">❤️</span> in India
              </span>
              <span className="text-white/40">•</span>
              <span className="px-2 py-1 bg-[#51cef4]/20 rounded-full text-[#51cef4] text-xs font-medium">
                Version 2.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
