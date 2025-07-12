"use client"
import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const headerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Academic Director",
      company: "Riverside University",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "AttendanceHub has revolutionized how we track student attendance. The real-time analytics help us identify at-risk students early and provide timely interventions. It's been a game-changer for our institution.",
      stats: "2,500+ students managed",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "IT Administrator",
      company: "TechVille College",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "The implementation was seamless, and the support team was exceptional. Our faculty love how intuitive the system is, and we've seen a 40% reduction in administrative overhead since switching to AttendanceHub.",
      stats: "40% efficiency increase",
    },
    {
      id: 3,
      name: "Prof. Emily Rodriguez",
      role: "Department Head",
      company: "Metropolitan Institute",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "What impressed me most is the detailed reporting system. I can now track attendance patterns across multiple courses and semesters. The insights have helped improve our curriculum planning significantly.",
      stats: "15+ departments using",
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Principal",
      company: "Oakwood High School",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "AttendanceHub's mobile app makes it incredibly easy for our teachers to mark attendance on the go. The parent notification feature has improved communication and student accountability remarkably.",
      stats: "98% teacher adoption",
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      role: "Vice Chancellor",
      company: "Innovation University",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      quote:
        "The security features and data protection measures give us complete confidence. The system handles our 5,000+ student database effortlessly, and the uptime has been exceptional throughout our usage.",
      stats: "5,000+ students tracked",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".testimonial-card")
        gsap.fromTo(
          cards,
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#51cef4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1665a0]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#51cef4]/10 text-[#0f5487] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#51cef4]/20">
            <Star className="h-4 w-4 fill-current" />
            Trusted by educators worldwide
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Customers Say</h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of educational institutions that trust AttendanceHub to streamline their attendance
            management
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#51cef4]/20 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-[#1665a0]" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-slate-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1665a0] to-[#0f5487] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-[#1665a0] font-medium">{testimonials[currentIndex].role}</div>
                    <div className="text-slate-600">{testimonials[currentIndex].company}</div>
                  </div>
                </div>

                <div className="hidden md:block w-px h-16 bg-slate-300"></div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1665a0] mb-1">
                    {testimonials[currentIndex].stats.split(" ")[0]}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonials[currentIndex].stats.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-[#51cef4]/30 hover:border-[#1665a0] hover:bg-white shadow-lg"
            >
              <ChevronLeft className="h-5 w-5 text-[#1665a0]" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-[#51cef4]/30 hover:border-[#1665a0] hover:bg-white shadow-lg"
            >
              <ChevronRight className="h-5 w-5 text-[#1665a0]" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#1665a0] scale-125" : "bg-slate-300 hover:bg-[#51cef4]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#51cef4]/20 hover:border-[#1665a0]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 mb-6 leading-relaxed line-clamp-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#51cef4] to-[#1665a0] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                  <div className="text-[#1665a0] text-xs font-medium">{testimonial.role}</div>
                  <div className="text-slate-600 text-xs">{testimonial.company}</div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="text-xs text-[#1665a0] font-medium bg-[#51cef4]/10 px-3 py-1 rounded-full inline-block">
                  {testimonial.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1665a0] to-[#0f5487] rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Them?</h3>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Start your free trial today and see why many teachers trust AttendanceHub
              </p>
              <Button
                size="lg"
                className="bg-white text-[#1665a0] hover:bg-slate-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
