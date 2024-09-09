import { Dot, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#263238] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">         
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">     
            <Link href='/'><h1 className='font-bold text-white       text-[25px]'>Nexcent <Dot className='text-[#47c9b3] inline -ml-6'size={60}/></h1></Link>
            </h2>
            <p className="text-gray-400">
              Copyright © 2024 Muhammad Maaz<br />All rights reserved.
            </p>
      
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
            </ul>
          </div>   
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Legal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white focus:outline-none px-3 py-2 w-full"
              />
              <button className="bg-gray-700 p-2 rounded">
                <Mail/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;