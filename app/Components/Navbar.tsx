'use client'
import { Dot, MoveRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className='flex justify-between bg-white w-full h-[75px] items-center'>
      {/* Logo Section */}
      <div className='ml-8 lg:ml-32 mt-5'>
        <Link href='/'>
          <h1 className='font-bold text-gray-700 text-[25px]'>
            Nexcent 
            <Dot className='text-[#47c9b3] inline -ml-6' size={60}/>
          </h1>
        </Link>
      </div>

      {/* Desktop Menu (Hidden on smaller screens) */}
      <div className='hidden lg:flex mr-8 lg:mr-32 mt-5 gap-8 items-center'>
        <Link href="#">Home</Link>
        <Link href="#">Features</Link>
        <Link href="#">Community</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Pricing</Link>
        <Link href="#" className='bg-[#24C6AB] text-white px-10 py-3 hover:bg-[#47c9b3]'>
          Register Now 
          <MoveRight className='inline ml-2'/>
        </Link>
      </div>

      {/* Mobile/Tablet Hamburger Menu Button (Visible on smaller screens) */}
      <div className='lg:hidden mr-8'>
        <button onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 py-5 shadow-md lg:hidden'>
          <Link href="#" onClick={toggleMenu}>Home</Link>
          <Link href="#" onClick={toggleMenu}>Features</Link>
          <Link href="#" onClick={toggleMenu}>Community</Link>
          <Link href="#" onClick={toggleMenu}>Blog</Link>
          <Link href="#" onClick={toggleMenu}>Pricing</Link>
          <Link href="#" onClick={toggleMenu} className='bg-[#24C6AB] text-white px-10 py-3 hover:bg-[#47c9b3]'>
            Register Now 
            <MoveRight className='inline ml-2'/>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Navbar;
