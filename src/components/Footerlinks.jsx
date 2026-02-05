import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";

function Footerlinks() {
  return (
    <div className="flex flex-wrap mt-5 ml-6 ">

    
      <div className="group p-3 h-5 w-22  md:h-14 md:w-47   md:h-14 md:w-47 flex items-center justify-center border border-gray-300 
        border-b-4 border-b-blue-500 cursor-pointer
        hover:bg-blue-500 transition-all duration-300">
        <FaFacebookF className="h-8 w-8 text-blue-500 group-hover:text-white" />
        <h1 className="ml-1 font-semibold text-gray-900 group-hover:text-white">
          Facebook
        </h1>
      </div>

      
      <div className="group p-3 h-5 w-22  md:h-14 md:w-47  flex items-center justify-center border border-gray-300 
        border-b-4 border-b-pink-500 cursor-pointer
        hover:bg-pink-500 transition-all duration-300">
        <FaInstagram className="h-7 w-7 text-pink-500 group-hover:text-white" />
        <h1 className="ml-1 font-semibold text-gray-900 group-hover:text-white">
          Instagram
        </h1>
      </div>

    
      <div className="group p-3 h-5 w-22  md:h-14 md:w-47  flex items-center justify-center border border-gray-300 
        border-b-4 border-b-blue-600 cursor-pointer
        hover:bg-blue-600 transition-all duration-300">
        <CiLinkedin className="h-7 w-7 text-blue-600 group-hover:text-white" />
        <h1 className="ml-1 font-semibold text-gray-900 group-hover:text-white">
          Linkedin
        </h1>
      </div>

      
      <div className="group p-3 h-5 w-22  md:h-14 md:w-47  flex items-center justify-center border border-gray-300 
        border-b-4 border-b-black cursor-pointer
        hover:bg-black transition-all duration-300">
        <FaXTwitter className="h-7 w-7 text-black group-hover:text-white" />
        <h1 className="ml-1 font-semibold text-gray-900 group-hover:text-white">
          Twitter
        </h1>
      </div>

      
      <div className="group p-3 h-5 w-22  md:h-14 md:w-47  flex items-center justify-center border border-gray-300 
        border-b-4 border-b-red-500 cursor-pointer
        hover:bg-red-500 transition-all duration-300">
        <FiYoutube className="h-7 w-7 text-red-500 group-hover:text-white" />
        <h1 className="ml-1 font-semibold text-gray-900 group-hover:text-white">
          Youtube
        </h1>
      </div>

    
      <div className="group p-3 h-5 w-22  md:h-14 md:w-47  flex items-center justify-center border border-gray-300 
        border-b-4 border-b-blue-400 cursor-pointer
        hover:bg-blue-400 transition-all duration-300">
        <FaTelegram className="h-7 w-7 text-blue-400 group-hover:text-white" />
        <h1 className="ml-1 font-semibold text-gray-900 group-hover:text-white">
          Telegram
        </h1>
      </div>

      
      <div className="group p-3 h-5 w-22  md:h-14 md:w-47  flex items-center justify-center border border-gray-300 
        border-b-4 border-b-red-500 cursor-pointer
        hover:bg-red-500 transition-all duration-300">
        <IoLogoGoogle className="h-7 w-7 text-red-500 group-hover:text-white" />
        <h1 className="ml-1 font-semibold text-gray-900 group-hover:text-white">
          Google
        </h1>
      </div>

    </div>
  )
}

export default Footerlinks
