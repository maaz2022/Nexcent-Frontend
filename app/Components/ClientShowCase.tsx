import React from 'react';
import Image from 'next/image';

const ClientShowCase = () => {

  const logos = [
    '/logo1.png', 
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
  ];

  return (
    <section className='w-full py-10'>
    

      <div className='text-center mb-8'>
        <h1 className='text-3xl text-[#4D4D4D] font-semibold'>Our Clients</h1>
        <p className='mt-2 text-lg text-gray-500'>We have been working with some Fortune 500+ clients</p>
      </div>

      <div className='flex justify-center items-center flex-wrap gap-8'>
        {logos.map((logo, index) => (
          <div key={index} className='flex justify-center items-center w-[150px] h-[100px] bg-white shadow-md rounded-lg hover:shadow-black'>
            <Image src={logo} alt={`Client logo ${index + 1}`} width={120} height={80} objectFit="contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientShowCase;
