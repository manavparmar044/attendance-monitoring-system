"use client"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight, CheckCircle, Users, BarChart3, Shield } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

function Hero() {
  const { user } = useUser()
  const router = useRouter()

  const features = [
    { icon: Users, text: "Real-time tracking" },
    { icon: BarChart3, text: "Advanced analytics" },
    { icon: Shield, text: "Secure & reliable" },
  ]

  gsap.registerPlugin(ScrollTrigger)

  // Refs for animations
  const imageRef = useRef(null)
  const imageContainerRef = useRef(null)
  const heroContentRef = useRef(null)
  const badgeRef = useRef(null)
  const headlineRef = useRef(null)
  const subheadingRef = useRef(null)
  const featuresRef = useRef(null)
  const buttonsRef = useRef(null)
  const statsRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animations
      const tl = gsap.timeline()

      // Animate background elements
      gsap.set(".bg-blur", { scale: 0, opacity: 0 })
      gsap.to(".bg-blur", {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
      })

      // Badge animation
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          {
            y: -30,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
        )
      }

      // Headline animation with text reveal effect
      if (headlineRef.current) {
        const headlineWords = headlineRef.current.querySelectorAll(".word")
        tl.fromTo(
          headlineWords,
          {
            y: 100,
            opacity: 0,
            rotationX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        )
      }

      // Subheading animation
      if (subheadingRef.current) {
        tl.fromTo(
          subheadingRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7",
        )
      }

      // Feature pills animation
      if (featuresRef.current) {
        const featurePills = featuresRef.current.querySelectorAll(".feature-pill")
        tl.fromTo(
          featurePills,
          {
            y: 30,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )
      }

      // Buttons animation
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button")
        tl.fromTo(
          buttons,
          {
            y: 30,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
      }

      // Image container and image animations
      

      // Stats section animation
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll(".stat-card")

        gsap.fromTo(
          statCards,
          {
            y: 80,
            opacity: 0,
            scale: 0.8,
            rotationX: -30,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Hover animations for stat cards
        statCards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out",
            })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            })
          })
        })
      }

      // Continuous floating animation for background elements
      gsap.to(".floating-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })

      gsap.to(".floating-2", {
        y: 15,
        x: -15,
        rotation: -3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1,
      })

      // Parallax effect for background elements
      gsap.to(".bg-blur", {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Split text into words for animation
  const splitTextIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block" style={{ perspective: "1000px" }}>
        {word}&nbsp;
      </span>
    ))
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden" ref={backgroundRef}>
          <div
            className="bg-blur floating-1 absolute top-20 left-10 w-72 h-72 bg-[#51cef4]/20 rounded-full blur-3xl"
            data-speed="0.5"
          ></div>
          <div
            className="bg-blur floating-2 absolute bottom-20 right-10 w-96 h-96 bg-[#1665a0]/10 rounded-full blur-3xl"
            data-speed="0.3"
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32" ref={heroContentRef}>
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 bg-[#51cef4]/10 text-[#0f5487] px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#51cef4]/20"
            >
              <CheckCircle className="h-4 w-4" />
              Trusted by many institutions
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              {splitTextIntoWords("Save valuable time,")}
              <br />
              <span className="bg-gradient-to-r from-[#0f5487] to-[#0e4e7d] bg-clip-text">
  {splitTextIntoWords("Increase Productivity")}
</span>
            </h1>

            {/* Subheading */}
            <p
              ref={subheadingRef}
              className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              The hassle-free solution for recording student attendance with advanced analytics and real-time insights.
            </p>

            {/* Feature Pills */}
            <div ref={featuresRef} className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-pill flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#51cef4]/20 rounded-full px-4 py-2 shadow-sm hover:border-[#1665a0]/30 transition-colors cursor-pointer"
                >
                  <feature.icon className="h-4 w-4 text-[#1665a0]" />
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1665a0] to-[#0f5487] hover:from-[#0f5487] hover:to-[#0e4e7d] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#1665a0] text-[#1665a0] hover:bg-[#1665a0] hover:text-white px-8 py-4 text-lg font-semibold rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Product Image - Fixed for Scroll Animations */}
        <div className="relative w-full flex justify-center -mt-8 sm:-mt-16 px-4">
          <div
            ref={imageContainerRef}
            className="relative w-full max-w-6xl"
            style={{ transformOrigin: "center center" }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#51cef4]/10 via-transparent to-transparent rounded-3xl blur-3xl scale-110 -z-10"></div>

            {/* Image container with enhanced styling */}
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/30">
              <Image
                ref={imageRef}
                alt="AttendanceHub Dashboard"
                src="/demo.png"
                width={1400}
                height={800}
                className="w-full h-auto object-contain rounded-2xl shadow-xl"
                priority
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(15, 84, 135, 0.15))",
                  transformOrigin: "center center",
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#51cef4]/20 hover:border-[#1665a0]/30 transition-colors cursor-pointer">
              <div className="text-3xl font-bold text-[#1665a0] mb-2">99.9%</div>
              <div className="text-slate-600 font-medium">Uptime Guarantee</div>
              <div className="text-sm text-slate-500 mt-1">Always available when you need it</div>
            </div>
            <div className="stat-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#51cef4]/20 hover:border-[#1665a0]/30 transition-colors cursor-pointer">
              <div className="text-3xl font-bold text-[#0f5487] mb-2">Real-Time</div>
              <div className="text-slate-600 font-medium">Live Attendance</div>
              <div className="text-sm text-slate-500 mt-1">Monitor attendance as it's marked</div>
            </div>
            <div className="stat-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#51cef4]/20 hover:border-[#1665a0]/30 transition-colors cursor-pointer">
              <div className="text-3xl font-bold text-[#51cef4] mb-2">100%</div>
              <div className="text-slate-600 font-medium">Data Security</div>
              <div className="text-sm text-slate-500 mt-1">Your data is encrypted & backed up</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
