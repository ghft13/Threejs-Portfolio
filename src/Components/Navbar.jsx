import React, { useEffect } from "react";
import gsap from "gsap";

function Navbar() {
  useEffect(() => {
    // GSAP Animations
    let tl = gsap.timeline();

    tl.to(".name", { y: -82, duration: 1, ease: "power4" })
      .to(".menu", { y: -160, duration: 1, ease: "power4" })
      .to(".title", { y: -20, duration: 1, opacity: 1, ease: "power4" })
      .to(".btn", { duration: 1, opacity: 1, ease: "power4" });
  }, []);

  return (
    <div className="w-screen bg-black h-screen relative urll-bg[reveal.mp4]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Reveal.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="z-10 flex justify-between items-center p-10 overflow-hidden">
        <h1 className="text-3xl text-white font-[one] name relative top-20">
          Jayraj Araj
        </h1>

        <div className="flex items-center gap-2 pr-7">
          <span className="h-3 w-3 rounded-md bg-white block mt-1"></span>
          <h2 className="text-2xl text-white font-[one] menu relative top-40">
            Menu
          </h2>
        </div>
      </div>

      <div className="py-10 relative top-[63%] z-10 flex justify-center items-center flex-col">
        <button className="bg-white font-[one] text-black rounded-xl p-2 btn opacity-0">
          Let's Get Connected
        </button>
      </div>
    </div>
  );
}

export default Navbar;
