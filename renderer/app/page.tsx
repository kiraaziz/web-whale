import Logo from '@/components/providers/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {

  return (
    <div className='w-full h-[100svh] flex lg:items-center xl:mt-20 flex-col p-5'>
      <div className="w-full max-w-3xl lg:p-5">
        <div className="w-full flex items-center justify-between">
          <div className='mb-1 h-12 w-12 flex items-center justify-center'>
            <Logo />
          </div>
          <Link href="/up">
            <Button>
              Navigate to Upload
            </Button>
          </Link>
        </div>
        <h1 className='text-2xl font-bold'>Stay Updated!</h1>
        <p className='text-sm text-foreground/60 mb-2'>Sign up for our newsletter to get the latest updates and offers.</p>
        <form action="https://usebasin.com/f/5770d0438051" method="POST" className="flex flex-col lg:flex-row gap-2 ">
          <Input autoFocus type="text" id="name" name="name" placeholder="Enter your name" required />
          <Input type="email" id="email" name="email" placeholder="Enter your email" required />
          <Button type="submit">
            <Send size={20} />
            Subscribe
          </Button>
        </form>
      </div>
      <div className='max-w-4xl mt-10 flex items-center relative justify-center'>
        <img src='/global/cap.png' className='rounded-lg border' />
        <img src='/global/cap.png' className='rounded-lg absolute opacity-20 blur-2xl -z-10' />
        <div className='bottom-0 absolute -z-10 rounded-full w-full h-10 bg-primary blur-3xl translate-y-1/2 '></div>
      </div>
    </div>
  )
}
