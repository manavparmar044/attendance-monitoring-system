import { UserButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function Sidebar() {
    const {userId} = auth()
    const isAuth = !!userId
    const user = await currentUser()
    if(!isAuth){
        redirect("/")
    }
  return (
    <div><UserButton /></div>
  )
}

export default Sidebar