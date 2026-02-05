

import React from "react";

function Videoplayer2() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-[8%] rounded-2xl ">
      {/* Aspect Ratio Wrapper */}
      <div className="relative w-100 h-65 md:w-115 md:h-70 md:mb-5 aspect-video">
        <iframe
           src="https://www.youtube.com/embed/bDoVJC1to38?si=UxCaiZfklmZEhUtn"
          title="YouTube video player"
          className="absolute inset-0 w-full h-full rounded-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Videoplayer2;
