// _components/Features.tsx
import { BarChart, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-Time Attendance",
    desc: "Instantly mark and view attendance with live syncing across all devices.",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    desc: "Track trends and identify defaulters through intuitive graphs and charts.",
  },
  {
    icon: ShieldCheck,
    title: "Highly Secure",
    desc: "Built with Clerk and Firebase for authentication and encrypted data storage.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Powerful Features
        </h2>
        <p className="text-slate-600 text-lg mb-12">
          Everything you need to manage attendance effortlessly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-md transition"
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
