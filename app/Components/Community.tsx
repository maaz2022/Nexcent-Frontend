import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Community = () => {
  return (
    <section className="w-full h-auto lg:h-[416px] flex flex-col lg:flex-row mt-4">
      {/* Left side with Image */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <Image
          src="/image (2).png" 
          alt="Sample Image"
          width={400}
          height={300}
          className="w-[300px] md:w-[350px] lg:w-[400px] h-auto"
        />
      </div>

      {/* Right side with text and button */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-4 md:px-8 py-6 lg:py-0">
        <div className="max-w-[500px]">
          <h1 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#4D4D4D] leading-tight">
            How to design your site footer like we did
          </h1>
          <p className="text-[#717171] mt-4 text-sm md:text-base">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <div className="mt-6">
            <Link href="#" className="bg-[#24C6AB] text-white px-8 md:px-10 py-3 hover:bg-[#47c9b3] rounded-sm text-sm md:text-base">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
