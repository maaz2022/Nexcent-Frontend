import Image from "next/image";
import Link from "next/link";
import ClientShowCase from "./Components/ClientShowCase";
import Features from "./Components/Facilities";
import Community from "./Components/Community";
import Community2 from "./Components/Community2";
import Community3 from "./Components/Community3";
import Community4 from "./Components/Comunity4";
import Blog from "./Components/Blog";
import MiniSection from "./Components/MiniSection";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <>
      <section className="bg-[#F5F7FA] w-full h-[416px] flex mt-4">
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
    <section>
      <Features/>
    </section>
         <section>
      <Community4/>
    </section>   
        <section>
      <Community2/>
    </section>
    <section>
      <Community/>
    </section>
    <section>
      <Community3/>
    </section>
    <section>
      <Blog/>
    </section>
    <section>
      <MiniSection/>
    </section>
    <section>
      <Footer/>
    </section>
    </>
  );
}
