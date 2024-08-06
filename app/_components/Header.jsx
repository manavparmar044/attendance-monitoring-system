"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
  const router = useRouter()
  const handleGetStarted = () => {
    router.push("/dashboard")
  }
  return (
    <div className='p-4 flex justify-between items-center w-full'>
        <h1 className='text-2xl'>Attendance</h1>
        <button onClick={handleGetStarted} className='px-4 py-2 bg-primary text-white rounded-sm'>Get Started</button>
    </div>
  )
}

export default Header