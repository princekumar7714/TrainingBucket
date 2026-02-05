import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import { FaFacebookF, FaPhoneAlt, FaSearch, FaWhatsapp } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJava } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { FaPython } from "react-icons/fa6";
import { FaRedhat } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import Typed from "typed.js";
import ITproframs from "../ITproframs";
import About from "./About";
import Learn from "../Learn";
import Advisors from "../Advisors";
import Partners from "../Partners";
import Speaks from "../Speaks";
import Mentor from "../Mentor";
import Aproach from "../Aproach";
import Certificate from "../Certificate";
import Journey from "../Journey";
import Faqs from "../Faqs";
import News from "../News";
import Blogs from "../Blogs";
import Branch from "../Branch";
import Networks from "../Networks";

import { NavLink } from "react-router-dom"; 
import Footerlinks from "../Footerlinks";
import Footer from "../Footer";
import itCourses from "../data/course.js";


function Home() {

  
const [searchQuery, setSearchQuery] = useState("");
const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = itCourses.filter(course =>
  course.title.toLowerCase().includes(searchQuery.toLowerCase())
);
const handleSearch = () => {
 
  setSearchQuery("");        
  setShowSuggestions(false);
};



  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Build Better <span class="text-yellow-500 font-bold">Skills!</span>'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  const handleWhatsAppClick = () => {
  window.open(
    "https://wa.me/919084486898?text=Hi%20there!",
    "_blank"
  );
};
const handleEmailClick = () => {
  window.location.href =
    "mailto:princerajpit5868@gmail.com?subject=Hi&body=Hello!";
};
const handleLinkedinClick = () => {
  window.location.href =
    "https://www.linkedin.com/in/prince-kumar-23a350301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
};
const handlexClick = () => {
  window.location.href =
    "https://x.com/1m_prince5_868";
};
const handleYTClick = () => {
  window.location.href =
    "https://youtube.com/@prince_iot8294?si=8jZtHojhU7a1wLHS";
};

  return (
    <div>
    <div id="homeimg" className="min-h-screen w-full relative overflow-hidden ">
      <div className="flex flex-col md:flex-row md:justify-between items-center px-4 py-2 gap-4">
        <div className="icons flex gap-4 md:gap-7 mt-2 mb-3">
          <div className="h-9 w-9 rounded-3xl items-center flex justify-center  bg-white  ">
            {" "}
            <a href="#">
              <FaFacebookF className="h-6 w-6 rounded-3xl  text-blue-800    " />
            </a>
          </div>
          <div className="h-9 w-9 rounded-3xl items-center flex justify-center  bg-white  ">
            <a href="#">
              <FaInstagram className="h-6 w-6 rounded-3xl  text-orange-600  bg-white" />
            </a>
          </div>
          <div className="h-9 w-9 rounded-3xl items-center flex justify-center  bg-white  ">
            <a href="#">
              <FaLinkedin className="h-6 w-6 rounded-3xl mt-1 text-blue-800  bg-white" onClick={handleLinkedinClick} />
            </a>
          </div>
          <div className="h-9 w-9 rounded-3xl items-center flex justify-center  bg-white  ">
            <a href="#">
              <FaSquareXTwitter className="h-6 w-6 rounded-3xl  text-black  bg-white" onClick={handlexClick} />
            </a>
          </div>
          <div  className="h-9 w-9 rounded-3xl items-center flex justify-center  bg-white  ">
            {" "}
            <a href="#">
              <FaYoutube className="h-6 w-6 rounded-3xl  text-red-600  bg-white" onClick={handleYTClick} />
            </a>
          </div>
        </div>
        <div className="contacts flex gap-7 mr-5">
          <a className="contacts hidden md:flex gap-5" href="#">
            {" "}
            <FaWhatsapp className="h-8 w-7  rounded-full bg-transparent text-green-700" onClick={handleWhatsAppClick}
   />
            <h3 className="text-white font-semibold mt-1">+91908448698</h3>
          </a>
          <a className="flex items-center gap-1" href="">
            {" "}
            <FaPhoneAlt className="h-8 w-8 rounded-full bg-transparent text-yellow-400" />
            <h3 className="text-white font-semibold">+919088992244</h3>
          </a>
          <a className="flex items-center gap-1" href="">
            <AiTwotoneMail className="h-8 w-8 rounded-full bg-transparent text-yellow-400" onClick={handleEmailClick} />
            <h3 className="text-white font-semibold">supporttraingbucket@gmail.com</h3>
          </a>
        </div>
      </div>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-between items-center h-full px-4">
        <div className="leftmid hidden lg:flex h-full w-[270px] gap-10">
          <div>
            <div className="h-25 w-25 mb-40 mt-22 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out ">
              <a href="">
                <IoLogoJavascript className="bg-white text-yellow-500 h-17 w-17" />
              </a>
            </div>
            <div className="h-25 w-25 mb-40 mt-15 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <a href="">
                <DiJava className="bg-white text-red-500 h-17 w-17" />
              </a>
            </div>
          </div>
          <div>
            <div className="h-25 w-25 mb-40 mt-7 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <a href="">
                <DiHtml5 className="bg-white text-orange-500 h-17 w-17" />
              </a>
            </div>
            <div className="h-25 w-25 mb-40 mt-15 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <a href="">
                <FaPython className="bg-white text-blue-500 h-17 w-17" />
              </a>
            </div>
          </div>
        </div>
        <div className="mid flex flex-col items-center text-center lg:text-left lg:ml-20">
          <div
            className="left"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <h1
              className="font-bold text-white mt-25 text-2xl sm:text-3xl lg:text-4xl mb-4"
              ref={typedRef}
            ></h1>
          </div>
        <div className="relative w-full max-w-xl">

  {/* SEARCH BAR */}
  <div className="h-11 bg-white rounded-xl flex items-center overflow-hidden shadow-lg">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setShowSuggestions(true);
      }}
      placeholder="Search Courses.."
      className="w-full h-full px-4 text-black outline-none"
    />

    <MdKeyboardArrowDown className="text-gray-500 mx-2" />

   <button onClick={handleSearch}>
  <IoSearchOutline className="bg-blue-500 h-11 w-10 text-white" />
</button>
  </div>

  {/* SUGGESTIONS DROPDOWN */}
  {searchQuery && showSuggestions && (
    <ul className="absolute z-50 w-full bg-white mt-2 rounded-xl shadow-xl max-h-56 overflow-y-auto">
      {suggestions.length > 0 ? (
        suggestions.slice(0, 6).map(course => (
          <li
            key={course.id}
            onClick={() => {
              setSearchQuery(course.title);
              setShowSuggestions(false);
            }}
            className="px-4 py-3 cursor-pointer hover:bg-blue-100 text-gray-800"
          >
            {course.title}
          </li>
        ))
      ) : (
        <li className="px-4 py-3 text-gray-500">
          No course found
        </li>
      )}
    </ul>
  )}
</div>

          <button onClick={() => {
    document
      .getElementById("advisor")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
            className="px-6 py-3 bg-blue-500 text-white text-lg sm:text-xl rounded-xl mt-8 hover:bg-white hover:text-blue-600 border transition"
            type="search"
          >
            Enroll <span className="font-bold text-2xl">Now!</span>{" "}
          </button>
          <div className="flex justify-center items-center text-white font-semibold mt-7">
            <h2>
              {" "}
              <PiStudent className="text-3xl" />{" "}
            </h2>
            <h3>Training Basket has over 2 Lakh+ Students & Alumni</h3>
          </div>
        </div>
        <div className="rightmid hidden lg:flex h-full w-[320px] gap-10 ">
          <div>
            <div className="h-25 w-25 mb-40 mt-22 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <a href="">
                <FaRedhat className="bg-white text-red-500 h-17 w-17" />
              </a>
            </div>

            <div className="h-25 w-25 mb-40 mt-15 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <a href="">
                <RiReactjsFill className="bg-white text-sky-500 h-17 w-17" />
              </a>
            </div>
          </div>
          <div>
            <div>
              <div className="h-25 w-25 mb-40 mt-7 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <a href="">
                  <FaAws className="bg-white text-blue-800 h-17 w-17" />
                </a>
              </div>
              <div className="h-25 w-25 mb-40 mt-15 ml-10 shadow-2xl  bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <a href="">
                  <FaDatabase className="bg-white text-green-500 h-17 w-17" />
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
      </div>
    <ITproframs/>
    <About/>
    <Learn/>
    <Advisors/>
    <Partners/>
    <Speaks/>
    <Mentor/>
    <Aproach/>
    <Certificate/>
    <Journey/>
    <Faqs/>
    <News/>
    <Blogs/>
    <Branch/>
    <Networks/>
  <Footerlinks/>
<Footer/>
      </div>
  );
}

export default Home;
