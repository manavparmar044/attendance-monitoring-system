"use client"
import { useState } from "react"
import { Check, X, Star, Zap, Shield, Users, BarChart3, Clock, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small institutions getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      icon: Users,
      popular: false,
      features: [
        "Up to 100 students",
        "Basic attendance tracking",
        "Email notifications",
        "Standard reports",
        "Mobile app access",
        "Email support",
      ],
      limitations: ["Advanced analytics", "Custom integrations", "Priority support", "White-label options"],
    },
    {
      name: "Professional",
      description: "Most popular choice for growing institutions",
      monthlyPrice: 79,
      annualPrice: 790,
      icon: BarChart3,
      popular: true,
      features: [
        "Up to 500 students",
        "Advanced attendance tracking",
        "Real-time notifications",
        "Advanced analytics & reports",
        "Mobile app access",
        "API integrations",
        "Priority email support",
        "Custom branding",
        "Bulk operations",
        "Data export",
      ],
      limitations: ["24/7 phone support", "Custom development"],
    },
    {
      name: "Enterprise",
      description: "For large institutions with advanced needs",
      monthlyPrice: 199,
      annualPrice: 1990,
      icon: Shield,
      popular: false,
      features: [
        "Unlimited students",
        "Enterprise-grade tracking",
        "Multi-campus support",
        "Advanced analytics & AI insights",
        "Mobile app access",
        "Custom integrations",
        "24/7 priority support",
        "White-label solution",
        "Advanced security",
        "Custom development",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      limitations: [],
    },
  ]

  return (
    <section
      id="pricing"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#51cef4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1665a0]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#51cef4]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#51cef4]/10 text-[#0f5487] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#51cef4]/20">
            <Zap className="h-4 w-4" />
            Simple, transparent pricing
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Choose Your Perfect Plan</h2>

          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-gradient-to-r from-[#1665a0] to-[#0f5487]" : "bg-slate-300"
              }`}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${
                  isAnnual ? "translate-x-7" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>Annual</span>
            {isAnnual && (
              <span className="bg-gradient-to-r from-[#1665a0] to-[#0f5487] text-white text-xs px-2 py-1 rounded-full font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular
                  ? "border-[#1665a0] ring-2 ring-[#1665a0]/20 lg:scale-105"
                  : "border-[#51cef4]/20 hover:border-[#1665a0]/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#1665a0] to-[#0f5487] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular
                      ? "bg-gradient-to-br from-[#1665a0] to-[#0f5487]"
                      : "bg-gradient-to-br from-[#51cef4] to-[#1665a0]"
                  } shadow-lg`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-slate-900">
                      ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-slate-500 mt-1">Billed annually (${plan.annualPrice}/year)</p>
                  )}
                </div>

                <Button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#1665a0] to-[#0f5487] hover:from-[#0f5487] hover:to-[#0e4e7d] text-white shadow-lg hover:shadow-xl"
                      : "bg-white border-2 border-[#1665a0] text-[#1665a0] hover:bg-[#1665a0] hover:text-white"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  What's included:
                </h4>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-slate-200">
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start gap-3">
                          <X className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#51cef4]/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Headphones className="h-8 w-8 text-[#1665a0]" />
              <h3 className="text-2xl font-bold text-slate-900">Need a custom solution?</h3>
            </div>

            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Have specific requirements or need a tailored solution for your institution? Our team is here to help you
              find the perfect fit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-[#1665a0] text-[#1665a0] hover:bg-[#1665a0] hover:text-white px-8 py-3 rounded-full font-semibold bg-transparent"
              >
                Schedule a Demo
              </Button>
              <Button className="bg-gradient-to-r from-[#1665a0] to-[#0f5487] hover:from-[#0f5487] hover:to-[#0e4e7d] text-white px-8 py-3 rounded-full font-semibold">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
