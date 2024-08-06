"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

function Header() {
  const {user} = useUser()
  return (
    <div className="p-6 border flex items-center justify-between w-full bg-white">
      <div className="">
        <h2 className='text-2xl font-semibold'>Hello, {user?.firstName}</h2>
        {/* <h2 className='text-2xl font-semibold'>{user.fullName}</h2> */}
        <p className='text-gray-400 text-sm'>Welcome to attendance monitoring system</p>
      </div>
      <div className="">
        <UserButton />
      </div>
    </div>
  )
}

export default Header