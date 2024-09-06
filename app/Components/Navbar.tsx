import { Dot, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <section className='flex justify-between bg-white w-full h-[75px] items-center'>
        <div className='ml-32 mt-5'>
            <Link href='/'><h1 className='font-bold text-gray-700 text-[25px]'>Nexcent <Dot className='text-[#47c9b3] inline -ml-6'size={60}/></h1></Link>
        </div>
        <div className='flex mr-32 mt-5 gap-8 items-center'>
            <Link href="#">Home</Link>
            <Link href="#">Features</Link>
            <Link href="#">Community</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Pricing</Link>
            <Link href="#" className='bg-[#24C6AB] text-white px-10 py-3 hover:bg-[#47c9b3]'>Register Now <MoveRight className='inline ml-2'/></Link>
        </div>
    </section>
  )
}

export default Navbar
