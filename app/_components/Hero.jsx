"use client"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight, CheckCircle, Users, BarChart3, Shield } from "lucide-react"

function Hero() {
  const { user } = useUser()
  const router = useRouter()

  const features = [
    { icon: Users, text: "Real-time tracking" },
    { icon: BarChart3, text: "Advanced analytics" },
    { icon: Shield, text: "Secure & reliable" },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="h-4 w-4" />
              Trusted by 500+ institutions
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Save valuable time,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Increase Productivity
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              The hassle-free solution for recording student attendance with advanced analytics and real-time insights.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm"
                >
                  <feature.icon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              alt="AttendanceHub Dashboard"
              src="/Macbook_Air_Mockup_2.png"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200/50"
              priority
            />
            {/* Overlay gradient for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime Guarantee</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Active Institutions</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-slate-600">Students Tracked</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
