"use client"

import { useUser } from "@clerk/nextjs"
import { db } from "@/config/FirebaseConfig"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Users, BarChart3, CheckCircle } from "lucide-react"

export default function DashboardPage() {
  const { user } = useUser()

  const [stats, setStats] = useState({
    students: 0,
    classes: 0,
    totalAttendance: 0,
  })

  useEffect(() => {
    if (user) fetchStats()
  }, [user])

  const fetchStats = async () => {
    try {
      let totalStudents = 0
      let totalAttendanceSessions = 0

      const classesSnap = await getDocs(collection(db, "classes"))
      const totalClasses = classesSnap.size

      for (const classDoc of classesSnap.docs) {
        const classData = classDoc.data()
        const students = classData.students || []
        const attendanceRecords = classData.attendance || []

        totalStudents += students.length
        totalAttendanceSessions += attendanceRecords.length
      }

      setStats({
        students: totalStudents,
        classes: totalClasses,
        totalAttendance: totalAttendanceSessions,
      })
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error)
    }
  }

  const tips = [
    "Mark attendance right at the beginning to avoid discrepancies.",
    "Use defaulter reports weekly to track irregular students.",
    "Always double-check attendance before saving.",
    "Keep student data updated for accurate reporting.",
  ]

  return (
    <div className="min-h-scree py-10 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
      <StatCard
  icon={<Users className="h-6 w-6 text-primary" />}
  label="Total Students"
  value={stats.students}
/>
<StatCard
  icon={<BarChart3 className="h-6 w-6 text-primary" />}
  label="Total Classes"
  value={stats.classes}
/>
<StatCard
  icon={<CheckCircle className="h-6 w-6 text-primary" />}
  label="Attendance Sessions"
  value={stats.totalAttendance}
/>
      </div>

      {/* Attendance Tips Section */}
      <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm mb-16">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">📌 Attendance Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-slate-100 text-[#163665] rounded-md px-4 py-6 flex items-center shadow-sm min-h-[160px]">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <p className="text-sm text-[#5a6981]">{label}</p>
          <h2 className="text-3xl font-bold">{value}</h2>
        </div>
      </div>
    </div>
  )
}

