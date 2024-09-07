import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Community = () => {
  return (
    <section className="w-full h-[416px] flex mt-4">
      {/* Left side with Image */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <Image
          src="/image (2).png" 
          alt="Sample Image"
          width={400}
          height={300}
        />
      </div>

      {/* Right side with text and button */}
      <div className="w-1/2 h-full flex flex-col justify-center px-8">
        <div className="max-w-[500px]">
          <h1 className="text-[36px] font-bold text-[#4D4D4D] leading-tight">
            How to design your site footer like we did
          </h1>
          <p className="text-[#717171] mt-4">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <div className="mt-6">
            <Link href="#" className="bg-[#24C6AB] text-white px-10 py-3 hover:bg-[#47c9b3] rounded-sm">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Community
