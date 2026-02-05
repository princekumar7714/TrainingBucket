import React from "react";

function Formbutton() {
  return (
    // 🔒 FULLSCREEN OVERLAY
    <div className="     flex items-center justify-center px-7 w-150 mt-10">

      {/* MODAL BOX */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Become Job Ready 🚀
          </h1>
          <p className="text-sm text-blue-100 mt-2">
            Start your learning journey today
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-4 p-6">

          <input
            type="text"
            placeholder="Full Name"
            required
            className="p-3 rounded-xl border border-gray-300
            placeholder-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400
            transition-all duration-200"
          />

          <input
            type="tel"
            placeholder="Contact Number"
            required
            className="p-3 rounded-xl border border-gray-300
            placeholder-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400
            transition-all duration-200"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="p-3 rounded-xl border border-gray-300
            placeholder-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400
            transition-all duration-200"
          />

          <select
            required
            className="p-3 rounded-xl border border-gray-300
            text-gray-700
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400
            transition-all duration-200"
          >
            <option value="">Select Course</option>
            <option>MERN Stack</option>
            <option>Frontend</option>
          </select>

          <select
            required
            className="p-3 rounded-xl border border-gray-300
            text-gray-700
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400
            transition-all duration-200"
          >
            <option value="">Select Branch</option>
            <option>Noida Sec-1</option>
            <option>Noida Sec-62</option>
          </select>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600
            text-white py-3 rounded-xl font-semibold text-lg
            hover:shadow-xl hover:scale-[1.03]
            active:scale-95
            transition-all duration-200"
          >
            Get in Touch
          </button>

        </form>
      </div>
    </div>
  );
}

export default Formbutton;
