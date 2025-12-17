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
    <div className="w-screen h-screen py-20 relative bg-[black] skills">
      <div>
        <h1 className="text-6xl text-left pl-10 font-[six] tracking-tight leading-[60px] text-white work">
          Available for contract work
          <br /> on creative Side & Projects 👀
        </h1>
      </div>

     <div className="px-20 py-32 lines">
  <h1 className="text-5xl font-[four] tracking-tight text-gray-400 pb-5">
    Just Learn
  </h1>
  <h1 className="text-5xl font-[four] tracking-tight text-gray-400 pb-5">
    Just Code
  </h1>
  <h1 className="text-5xl font-[four] tracking-tight text-gray-400 pb-5">
    Just Explore AI
  </h1>
  <h1 className="text-5xl font-[four] tracking-tight text-white mt-4 ">
    Learn, Code & Explore AI
  </h1>
</div>


      <div className="absolute right-20 top-32">
        <h1 className="text-8xl tracking-tight text-white font-[one]">
          why Me ?
        </h1>
      </div>

      <div className="w-full h-1 bg-gray-400 absolute bottom-28"></div>
      <h2 className="btn opacity-0 text-4xl bg-white text-black font-[two] px-5 py-2 rounded-full absolute bottom-[320px] right-80">
        HTML
      </h2>
      <h2 className="btn opacity-0 text-4xl bg-white text-black font-[two] px-5 py-2 rounded-full absolute bottom-[320px] right-52">
        CSS
      </h2>
      <h2 className="btn opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[320px] right-20">
        JS
      </h2>
      <h2 className="btn1 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[350px] right-40">
        Tailwind
      </h2>
      <h2 className="btn2 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[400px] right-64 rotate-12">
        React JS
      </h2>
      <h2 className="btn2 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[400px] right-20 -rotate-[16deg]">
        GSAP
      </h2>
      <h2 className="btn3 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[500px] right-36">
        EXPRESS
      </h2>
      <h2 className="btn4 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[556px] right-64 ">
        NODEJS
      </h2>
      <h2 className="btn4 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[556px] right-10">
        MONGODB
      </h2>
       <h2 className="btn4 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[620px] right-10">
        WORDPRESS
      </h2>
       <h2 className="btn4 opacity-0 text-4xl bg-white text-black font-[two] px-10 py-2 rounded-full absolute bottom-[620px] right-72">
        CANVA
      </h2>

      <div className="absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 opacity-0">
        <h1 className="uppercase text-8xl font-[six]">Frontend Developer</h1>
      </div>
    </div>
  );
}

export default Skills;
