import React from "react";
import bg from "../assets/aproach-img/aproach.jpg";
function Aproach() {
  return (
    <div>
      <div
        className="flex flex-col items-center"
        style={{
          backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url(${bg})
  `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120vh",
          marginTop: "30px",
          
        }}
      >
        <h1 className="font-bold text-3xl text-yellow-300 mt-5">
          what makes us Different
        </h1>
        <p className="text-white font-semibold mt-3">
          Training Bucket truly stands out in the world of IT Training and
          professional development <br /> due to its exceptional features and
          unwavering commitment to excellence.
        </p>
        <div className=" flex gap-17 mt-7">
          <div className="flex flex-col items-center gap-8">
            <div className="p-2 bg-yellow-300 md:ml-38 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>
                Ofline/Online <br /> <span className="ml-5">Training</span>
              </h1>
            </div>
            <div className="p-5 md:mr-13  bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>Structured Learning plan</h1>
            </div>
            <div className="p-5 md:mr-18 bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>Video Leactures</h1>
            </div>
            <div className="p-5 md:mr-6 bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>Mentor support</h1>
            </div>
            <div className="p-5 md:ml-18 bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>Exam Tips and Tricks</h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="p-5 bg-yellow-300 mr-10 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>100% Job assistance</h1>
            </div>
            <div className="p-5 md:ml-35 bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>World class LMS</h1>
            </div>
            <div className="p-5 md:ml-35 bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>Soft skills</h1>
            </div>
            <div className="p-5 md:ml-40 bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>Interview Support</h1>
            </div>
            <div className="p-5 md:ml-5 bg-yellow-300 rounded-xl text-blue-500 font-bold  flex justify-center md:text-xl ">
              <h1>Study Materials & Textbooks</h1>
            </div>
          </div>
        </div>
          <button className="bg-gray-300 p-4 rounded-2xl mt-5 text-blue-500 font-bold hover:bg-yellow-300 cursor-pointer">Experience Excellence Today!</button>
      </div>
    </div>
  );
}

export default Aproach;
