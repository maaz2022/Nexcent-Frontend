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
      {/* Hero Section */}
      <section className="bg-[#F5F7FA] w-full h-auto lg:h-[416px] flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center flex-col px-6 lg:px-0">
          <div>
            <h1 className="text-[32px] md:text-[40px] lg:text-[45px] font-bold text-[#4D4D4D] leading-tight text-center md:text-left">
              Lessons and insights <br />
              <span className="text-[32px] md:text-[40px] lg:text-[45px] font-bold text-[#24C6AB]">
                from 8 years
              </span>
            </h1>
            <p className="text-[#717171] mt-3 lg:mt-5 text-sm md:text-base">
              Where to grow your business as a photographer: site or social media?
            </p>
          </div>
          <Link href="#" className='bg-[#24C6AB] text-white px-14 py-3 hover:bg-[#47c9b3] mt-6 mr-70 md:mr-80 rounded-sm'>Register</Link>    
        </div>
        {/* Hero Image */}
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center mt-6 lg:mt-0">
          <Image
            src="/sidepic.png"
            alt="Sample Image"
            width={400}
            height={300}
            className="w-[300px] md:w-[350px] lg:w-[400px]"
          />
        </div>
      </section>

      {/* Client Showcase Section */}
      <section>
        <ClientShowCase />
      </section>

      {/* Features Section */}
      <section>
        <Features />
      </section>

      {/* Community Sections */}
      <section>
        <Community4 />
      </section>
      <section>
        <Community2 />
      </section>
      <section>
        <Community />
      </section>
      <section>
        <Community3 />
      </section>

      {/* Blog Section */}
      <section>
        <Blog />
      </section>

      {/* Mini Section */}
      <section>
        <MiniSection />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </>
  );
}

