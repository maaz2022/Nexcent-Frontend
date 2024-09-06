import Image from "next/image";
import Link from "next/link";
import ClientShowCase from "./Components/ClientShowCase";

export default function Home() {
  return (
    <>
      <section className="bg-gray-100 w-full h-[416px] flex mt-4">
      <div className="w-1/2 h-full flex justify-center items-center flex-col">
        <div className="">
          <h1 className="text-[45px] font-bold text-[#4D4D4D] leading-tight">
            Lessons and insights <br />
            <span className="text-[45px] font-bold text-[#24C6AB]">from 8 years</span>
          </h1>
          <p className="text-[#717171] mt-5">Where to grow your business as a photographer: site or social media?</p>
        </div>
        <Link href="#" className='bg-[#24C6AB] text-white px-14 py-3 hover:bg-[#47c9b3] mt-6 mr-80 rounded-sm'>Register</Link>    

      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <Image
          src="/sidepic.png" 
          alt="Sample Image"
          width={400}
          height={300}
        />
      </div>
    </section>
    <section>
      <ClientShowCase/>
    </section>
    </>
  );
}
