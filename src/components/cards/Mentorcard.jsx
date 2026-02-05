import React from "react";

function Mentorcard({ banner, profile, experience, role, name }) {
  return (
    <div className="w-72 h-125 mt-10 mb-10 ml-14 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      
      {/* Top Image Section */}
      <div className="relative h-75 ">
        <img
          src={banner}
          alt="Mentor Banner"
          className="h-full w-full object-cover "
        />

        {/* Profile Image */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <img
            src={profile}
            alt="Mentor Profile"
            className="h-20 w-20 rounded-full border-4 border-white object-cover bg-white"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-12 pb-6 px-5 text-center h-full   bg-blue-50">
        <p className="text-sm text-gray-600">
         {experience}
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-2">
         {role}
        </h2>

        <button className="mt-4 px-5 py-2  bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition">
         {name}
        </button>
      </div>
    </div>
  );
}

export default Mentorcard;
