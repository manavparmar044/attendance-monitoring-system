"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Hero() {
  const { user } = useUser()
  const router = useRouter()
  // if(user){
  //   router.push("/dashboard")
  // }
  return (
    <div className=''>
      <section className="flex flex-col items-center bg-gray-50 justify-center gap-2 py-20">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Save the valuable time,
              <strong className="font-extrabold text-primary sm:block"> Increase Productivity. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              The hasslefree solution for recording the attendance of the students
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button className='cursor-pointer block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring sm:w-auto'>Explore</Button>

              <button className='block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto cursor-pointer'>Learn More</button>
            </div>
          </div>
        </div>
        <div className="">
          <Image alt='Laptop'
            src="/Macbook_Air_Mockup_2.png" 
            width={1000} 
            height={500} 
            className='w-[120rem] mt-[-6rem] md:mt-[-4rem] lg:mt-[-8rem] xl:mt-0'
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
