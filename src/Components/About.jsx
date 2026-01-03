import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".About",
          start: "top top", // Start when the section reaches the top of the viewport
          end: "bottom 10%", // Scroll for twice the viewport height
          scrub: 1, // Smooth animation during scroll
          pin: true,

        },
      });

      tl.to(".txt", {
        translateZ: 0,
        opacity: 1,
        ease: "power1.out",
      });

      tl.to(".underline", {
        width: "120px",
        duration: 1.5,
        ease: "power2.out",
      });

      tl.to(
        "h1 span",
        {
          color: "white",
          stagger: 1,
          ease: "power1.out",
        },
        "+=.1"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-[black] About">
        <h1 className="text-center text-3xl font-[four] py-20 me text-white">
          About Me
          <span className="underline"></span>
        </h1>

        <div className="flex justify-center items-center box px-4 md:px-0">
          <h1 className="text-3xl md:text-7xl font-[one] text-center tracking-tight text-gray-500 txt opacity-0 leading-tight md:leading-normal">
            <span>I’m </span>
            <span>a </span>
            <span>full-stack </span>
            <span>developer </span>
            <span>and </span>
            <span>a </span>
            <span>WordPress </span>
            <span>developer </span>
            <br className="hidden md:block" />

            <span>who </span>
            <span>builds </span>
            <span>scalable, </span>
            <span>web </span>
            <span>applications </span>
            <span>and </span>
            <span>clean </span>
            <span>content-driven </span>
            <span>websites </span>
            <br className="hidden md:block" />

            <span>with </span>
            <span>a </span>
            <span>strong </span>
            <span>focus </span>
            <span>on </span>
            <span>user </span>
            <span>experience, </span>
            <span>design, </span>
            <span>and </span>
            <span>performance.</span>
          </h1>

        </div>
      </div>
    </>
  );
}

export default About;
