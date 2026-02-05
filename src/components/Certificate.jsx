// import React, { useState } from "react";
import certificate from "../assets/certification/certificate.webp";
// import Formbutton from "./button/Formbutton";

function Certificate() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="bg-purple-100 flex flex-col items-center py-10">
        <h1 className="font-bold text-blue-500 text-2xl text-center">
          IT Certification by Training Basket
        </h1>

        <p className="p-5 text-center max-w-3xl">
          Our IT certificates are more than just a document—it’s proof that you
          have taken a significant step toward mastering your domain.
        </p>

        <img
          src={certificate}
          alt="IT Certification"
          className="p-4 max-w-full"
        />

        {/* OPEN FORM BUTTON */}
        <button
          type="button"
          // onClick={() => setShowForm(true)}
          className="p-3 bg-blue-500 rounded-2xl font-bold mt-4 text-white
          hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500
          transition-all duration-300"
        >
          Get Your Certification NOW!
        </button>
      </div>

      
      {/* {showForm && (
        <Formbutton closeForm={() => setShowForm(false)} />
      )} */}
    </>
  );
}

export default Certificate;