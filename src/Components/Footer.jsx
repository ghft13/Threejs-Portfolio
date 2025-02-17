import React, { useEffect } from "react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top top", // Starts when footer enters viewport
        end: "bottom 80%", // Ends before fully scrolling past
       // Smooth effect
      
      },
    });

    tl.to(".name, .menu", { y: -80, duration: 1, ease: "ease" })
      .to(".title", { y: -40, duration: 1, ease: "power4" }, "-=0.5")
      .to(".title2", { y: -300, duration: 1, ease: "power4" }, "-=0.5")
      .to(".mar", { opacity: 1, duration: 1, ease: "power4" }, "-=0.5")
      .to(".first", { color: "red", stagger: 0.2 }, "-=0.5")
      .to(".second", { color: "blue", stagger: 0.2 }, "-=0.5");

    // Infinite Marquee Effect
    gsap.to(".marquee-content", {
      xPercent: -100, // Moves by full width
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    return () => {
      tl.kill(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="w-screen bg-[#F9DDDF] h-screen footer">
      <div className="flex justify-between items-center p-10 overflow-hidden">
        <h1 className="text-3xl text-[#2F303D] font-[one] name relative top-20">
          Jayraj Araj
        </h1>
        <div className="flex items-center gap-2 pr-7">
          <span className="h-3 w-3 rounded-md bg-red-900 block"></span>
          <h2 className="text-2xl text-[#2F303D] font-[one] menu relative top-20">
            Menu
          </h2>
        </div>
      </div>

      <div className="py-10">
        <div className="flex items-center justify-center gap-10 px-20">
          <h1 className="text-8xl font-[four]">Get Your Project Started</h1>
          <FaArrowRightLong className="text-5xl" />
        </div>

        <div className="overflow-hidden">
          <pre className="text-[6.5vw] tracking-tight uppercase leading-[90px] font-[two] py-16 px-10 relative top-72 title2">
            I turn your <span className="first">I</span>
            <span className="first">d</span>
            <span className="first">e</span>
            <span className="first">a</span>
            <span className="first">s</span> into
            <br />
            <span className="second">C</span>
            <span className="second">r</span>
            <span className="second">e</span>
            <span className="second">a</span>
            <span className="second">t</span>
            <span className="second">i</span>
            <span className="second">v</span>
            <span className="second">e</span> impact!
          </pre>
        </div>

        {/* Marquee Wrapper */}
        <div className="bg-[#68A7F4] overflow-hidden w-screen py-2 px-5 mt-16 opacity-0 mar">
          <div className="flex whitespace-nowrap marquee-content">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex gap-2">
                  {Array(4)
                    .fill("Because life's too short for boring designs ~")
                    .map((text, j) => (
                      <h2 key={j} className="text-3xl font-[two] mx-2">
                        {text}
                      </h2>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
