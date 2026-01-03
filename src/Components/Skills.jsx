import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Skills() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".skills",
            start: "top -10%",
            scrub: 1,
            pin: true,
          },
        },
        "a"
      );

      tl.to(".lines h1", {
        color: "orange",
        stagger: 1,
      });

      let t2 = gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".skills",
            start: "top -10%",
          },
        },
        "a"
      );
      t2.to(".btn", {
        y: 200,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn1", {
        y: 175,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn2", {
        y: 150,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn3", {
        y: 200,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
      t2.to(".btn4", {
        y: 200,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full min-h-screen py-20 relative bg-[black] skills overflow-hidden">
      <div>
        <h1 className="text-3xl md:text-6xl text-left px-5 md:pl-10 font-[six] tracking-tight leading-snug md:leading-[60px] text-white work">
          Available for contract work
          <br className="hidden md:block" /> on creative Side & Projects 👀
        </h1>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-32 lines">
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-gray-400 pb-3 md:pb-5">
          Just Learn
        </h1>
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-gray-400 pb-3 md:pb-5">
          Just Code
        </h1>
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-gray-400 pb-3 md:pb-5">
          Just Explore AI
        </h1>
        <h1 className="text-3xl md:text-5xl font-[four] tracking-tight text-white mt-4 ">
          Learn, Code & Explore AI
        </h1>
      </div>


      <div className="relative md:absolute md:right-20 md:top-32 px-5 md:px-0 mt-10 md:mt-0">
        <h1 className="text-5xl md:text-8xl tracking-tight text-white font-[one]">
          why Me ?
        </h1>
      </div>

      <div className="w-full h-1 bg-gray-400 absolute bottom-28 hidden md:block"></div>

      {/* Mobile: Flex wrap layout, Desktop: Absolute positioning */}
      <div className="flex flex-wrap gap-4 px-5 mt-10 md:block">
        <h2 className="btn opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-5 py-2 rounded-full relative md:absolute md:bottom-[320px] md:right-80">
          HTML
        </h2>
        <h2 className="btn opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-5 py-2 rounded-full relative md:absolute md:bottom-[320px] md:right-52">
          CSS
        </h2>
        <h2 className="btn opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[320px] md:right-20">
          JS
        </h2>
        <h2 className="btn1 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[350px] md:right-40">
          Tailwind
        </h2>
        <h2 className="btn2 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[400px] md:right-64 md:rotate-12">
          React JS
        </h2>
        <h2 className="btn2 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[400px] md:right-20 md:-rotate-[16deg]">
          GSAP
        </h2>
        <h2 className="btn3 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[500px] md:right-36">
          EXPRESS
        </h2>
        <h2 className="btn4 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[556px] md:right-64 ">
          NODEJS
        </h2>
        <h2 className="btn4 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[556px] md:right-10">
          MONGODB
        </h2>
        <h2 className="btn4 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[620px] md:right-10">
          WORDPRESS
        </h2>
        <h2 className="btn4 opacity-0 text-2xl md:text-4xl bg-white text-black font-[two] px-8 md:px-10 py-2 rounded-full relative md:absolute md:bottom-[620px] md:right-72">
          CANVA
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 opacity-0 hidden md:block">
        <h1 className="uppercase text-8xl font-[six]">Frontend Developer</h1>
      </div>
    </div>
  );
}

export default Skills;
