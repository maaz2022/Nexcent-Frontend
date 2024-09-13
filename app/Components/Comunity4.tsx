import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Community4 = () => {
  return (
    <section className="w-full h-auto lg:h-[416px] flex flex-col lg:flex-row mt-4">
      {/* Left side with Image */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <Image
          src="/coomm.png" 
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
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-[#717171] mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
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

export default Community4
