"use client"

import { Button } from '@/components/ui/button'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import { useUser } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PageWelcome() {

    const { user } = useUser()
    const router = useRouter()

    const fullName = user ? `${user.firstName} ${user.lastName}` : ""

  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center gap-8'>
      <TypographyH1 className='w-2/3'>{`Welcome ${fullName} 🙋‍♂️`}</TypographyH1>
      <TypographyP className=' w-2/3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam, natus ipsum odit cupiditate similique non delectus eius facilis modi magnam, assumenda deleniti.</TypographyP>
      <Button size="lg" onClick={() => {router.push("/")}}>{<ArrowLeft size={16} />}&ensp;Continue</Button>
    </div>
  )
}
