import Link from 'next/link'
import React from 'react'

const MiniSection = () => {
  return (
    <section className='bg-[#F5F7FA]  flex justify-center mt-20 p-5 flex-col items-center space-y-8 '>
        <h1 className='md:text-6xl text-3xl font-bold text-[#263238] max-w-[600px] text-center leading-snug'>Pellentesque suscipit fringilla libero eu.</h1>
        <Link href='/' className='bg-[#24C6AB] text-white px-8 py-3 rounded-md'>Get a Demo  &rarr;</Link>
    </section>
  )
}

export default MiniSection
