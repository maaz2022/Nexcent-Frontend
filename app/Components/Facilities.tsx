import { HandHeart, Landmark, Users } from 'lucide-react'
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
            {/* Title and Description */}
            <div className='text-center mb-8'>
                <h1 className='text-2xl md:text-3xl text-[#4D4D4D] font-semibold'>
                    Manage your entire community <br className="hidden md:block"/> in a single system
                </h1>
                <p className='text-md md:text-lg text-gray-500 mt-4'>
                    Who is Nexcent suitable for?
                </p>
            </div>

            {/* Features Section */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-20 px-4 md:px-0'>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center w-full md:w-[300px] h-auto p-4 bg-white shadow-md rounded-lg space-y-4 hover:shadow-[#24C6AB] cursor-pointer transition-all duration-300'>
                        {feature.icon}
                        <h2 className='text-lg md:text-xl font-bold mb-2 text-[#4D4D4D]'>{feature.title}</h2>
                        <p className='text-center text-gray-500 text-sm md:text-base'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
