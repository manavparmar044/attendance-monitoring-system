import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

function Temp() {
    const {userId} = auth()
  return (
    <div className="bg-slate-400 w-full">
        <ul className="flex justify-between py-4 px-6">
            <div className="">
                <Link href="">Home</Link>
            </div>
            <div className="flex items-center">
                <Link href="/client">Client Page</Link>
            </div>
            <div className="flex gap-6 items-center">
                {!userId ? (
                    <>
                    <Link href="/sign-in">
                    <li>Login</li>
                    </Link>
                    <Link href="/sign-up">
                    <li>Sign up</li>
                    </Link></>
                ) : (
                    <>
                <Link href="/profile">
                <li>Profile</li>
                </Link>
                <li className='flex items-center'><UserButton /></li></>
                )}
            </div>
        </ul>
    </div>
  )
}

export default Temp