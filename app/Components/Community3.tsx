import Image from 'next/image'
import React from 'react'

const Community3 = () => {
  return (
    <section className="bg-[#F5F7FA] w-full h-auto lg:h-[416px] flex flex-col lg:flex-row mt-4">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <Image
          src="/nextimage.png" 
          alt="Sample Image"
          width={400}
          height={300}
          className="w-[300px] md:w-[350px] lg:w-[400px] h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start p-4 md:p-6">
        <div className="max-w-[600px]">
          <p className="text-[#717171] text-sm md:text-base">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-[#24C6AB] mt-5">
            Tim Smith
          </h1>
          <p className="text-[#717171] mt-2 font-thin text-sm md:text-base">British Dragon Boat Racing Association.</p>

          {/* Logos Section */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Image src="/logo1.png" alt="Logo 1" width={60} height={50} className="object-contain" />
            <Image src="/logo2.png" alt="Logo 2" width={60} height={50} className="object-contain" />
            <Image src="/logo3.png" alt="Logo 3" width={60} height={50} className="object-contain" />
            <Image src="/logo4.png" alt="Logo 4" width={60} height={50} className="object-contain" />

            <a href="/" className="w-full lg:w-auto text-[#24C6AB] font-semibold hover:underline justify-center items-center text-lg md:text-2xl mt-4 lg:mt-0">
              Meet all customers &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community3
