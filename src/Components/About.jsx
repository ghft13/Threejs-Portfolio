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
      <div className="w-screen h-[100vh] bg-[black] About">
        <h1 className="text-center text-3xl font-[four] py-20 me text-white">
          About Me
          <span className="underline"></span>
        </h1>

        <div className="flex justify-center items-center box ">
          <h1 className="text-8xl font-[one] text-center tracking-tight text-gray-500 txt opacity-0">
            <span>I’m </span>
            <span>a </span>
            <span>full-stack </span>
            <span>developer </span>
            <span>and </span>
            <span>designer </span> <br />
            <span>who </span>
            <span>believes </span>
            <span>that </span>
            <span>great </span>
            <span>products </span>
            <span>are </span>
            <span>not </span>
            <span>only </span> <br />
            <span>robust </span>
            <span>and </span>
            <span>scalable, </span>
            <span>but </span>
            <span>also </span> <br />
            <span>beautiful </span>
            <span>and </span>
            <span>accessible </span>
            <span>in </span>
            <span>every </span>
            <span>way.</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default About;
