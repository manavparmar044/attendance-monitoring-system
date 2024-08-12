"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
  const router = useRouter()
  const handleGetStarted = () => {
    router.push("/dashboard")
  }
  return (
    <div className='p-4 flex justify-between items-center w-full pl-20 pr-20 fixed bg-white'>
        <h1 className='text-2xl font-semibold text-primary pt-2'>Attendance Monitoring</h1>
        <button onClick={handleGetStarted} className='px-4 py-2 bg-primary text-white rounded-sm'>Get Started</button>
    </div>
  )
}

export default Header