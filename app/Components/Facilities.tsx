import { HandHeart, Landmark, User, Users } from 'lucide-react'
import React from 'react'

const Features = () => {
    const features = [
        {
            icon: <Users className='bg-[#24C6AB] rounded-full text-white p-2' size={40}/>,
            title: 'Membership Organisations',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            icon: <Landmark className='bg-[#24C6AB] rounded-full text-white p-2' size={40}/>,
            title: 'National Associations',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            icon: <HandHeart className='bg-[#24C6AB] rounded-full text-white p-2' size={40}/>,
            title: 'Clubs And Groups',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        },
    ]
  return (
    <section className='w-full py-10'>
        <div className='text-center mb-8'>
            <h1 className='text-3xl text-[#4D4D4D] font-semibold'>
                Manage your entire community <br /> in a single system
            </h1>
            <p className='text-lg text-gray-500 mt-4'>Who is Nexcent suitable for?</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
            {features.map((feature, index) => (
                <div key={index} className='flex flex-col items-center w-[300px] h-[250px] p-4 bg-white shadow-md rounded-lg space-y-6 hover:shadow-[#24C6AB] cursor-pointer'>
                    {feature.icon}
                    <h2 className='text-xl font-bold mb-2 text-[#4D4D4D]'>{feature.title}</h2>
                    <p className='text-center text-gray-500'>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Features
