import React from "react";

function Button({ onClick, children = "VIEW PROGRAM" }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="h-10 w-60 bg-blue-500 text-white font-bold rounded-2xl mt-4 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 cursor-pointer transition-all duration-300"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;