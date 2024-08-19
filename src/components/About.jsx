import React, {useEffect, useRef, useState} from "react";
import "../styles/styles.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {threshold: 0.7}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 300) {
            clearInterval(interval);
            return 300;
          }
          return prev + 1;
        });
      }, 30);
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col pt-[120px] lg:flex-row lg:px-[100px] items-center justify-center gap-6 relative 2xl:px-[300px]"
    >
      <div
        className={`w-full lg:w-1/2 flex flex-col items-center lg:items-end relative z-10 fade-in ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="text-5xl md:text-[50px] flex justify-end mb-8 md:mb-16 relative z-10">
          About Me
        </div>
        <div
          className="w-full text-[10vw] md:text-[7vw] flex justify-center lg:justify-end text-gray-500 opacity-15 absolute top-12 md:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold z-0"
        >
          About
        </div>
        <div
          className="text-base md:text-[16px] mb-6 md:mb-10 relative z-10 text-gray-400 text-center px-4 lg:px-0 lg:text-end">
          "I bring the front charm and the back power! Whether it’s crafting
          beautiful, user-friendly interfaces or building robust, scalable
          back-end systems, I handle both sides of the web with creativity and
          precision. I’m Nene Surawut Tiankam, your Full-Stack Developer!"
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 text-base md:text-[22px] font-thin w-full max-w-md">
            <div>Name:</div>
            <div className="text-gray-400 mb-2 md:mb-4">Surawut Tiankam</div>
            <div>Date of birth:</div>
            <div className="text-gray-400 mb-2 md:mb-4">January 25, 2001</div>
            <div>Address:</div>
            <div className="text-gray-400 mb-2 md:mb-4">Phitsanulok, Thailand</div>
            <div>Age:</div>
            <div className="text-gray-400 mb-2 md:mb-4">23</div>
            <div>Hobby:</div>
            <div className="text-gray-400 mb-2 md:mb-4">Badminton Lover 🏸</div>
          </div>
        </div>
        <div className="w-full">
          <div
            className={`bg-yellow-400 h-[2px] mt-6`}
            style={{width: `${progress / 3}%`}}
          ></div>
          <div className="m-6 flex text-[20px] md:text-[30px] gap-2 justify-center lg:justify-start">
            <div className="text-yellow-500 font-bold">{progress}%</div>
            <div>Fast learner, adaptable</div>
          </div>
          <div
            className={`bg-yellow-400 h-[2px]`}
            style={{width: `${progress / 3}%`}}
          ></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="/images/Nene_4.png"
          alt="Nene_4"
          className="w-[300px] md:w-[420px]"
        />
      </div>
    </section>
  );
}

export default About;
