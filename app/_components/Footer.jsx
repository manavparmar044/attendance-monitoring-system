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
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">AttendanceHub</h2>
              <p className="text-slate-400 text-sm">Smart Monitoring System</p>
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
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-6">Features</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Real-Time Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Automated Notifications
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Analytics & Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  System Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Custom Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/manav-manish-parmar-129869208/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Meet the Developer
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/manav-manish-parmar-129869208/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2024 AttendanceHub by Manav Manish Parmar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span>Version 2.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
