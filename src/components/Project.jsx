import React, {useEffect, useRef, useState} from "react";

function Project() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {threshold: 0.20}
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
      images.forEach((_, index) => {
        setTimeout(() => {
          setVisibleImages((prev) => [...prev, index]);
        }, index * 500); // Delay of 500ms between each image
      });
    }
  }, [isVisible]);

  const images = [
    {
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*7VyEZgzwUhQMeBqb",
      alt: "coding",
      text: "Coding",
      className: "lg:w-[60%] w-full h-[400px]",
    },
    {
      src: "/images/Activities_1.jpg",
      alt: "hiking",
      text: "Hiking",
      className: "lg:w-[40%] w-full h-[450px]",
    },
    {
      src: "/images/Project_1.jpg",
      alt: "team work",
      text: "Team work",
      className: "lg:w-[40%] w-full h-[450px]",
    },
    {
      src: "/images/Activities_3.jpg",
      alt: "sports_event",
      text: "Sports Event",
      className: "lg:w-[60%] w-full h-[400px]",
    },
  ];

  return (
    <section
      id="project"
      ref={sectionRef}
      className={`pt-[120px] flex flex-col items-center justify-center duration-1000 transform transition-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative mb-10 flex flex-col items-center">
        <h1 className="text-[50px] font-bold flex text-center justify-center relative z-10 mb-10">
          <div>Project</div>
          <div>&</div>
          <div>Activities</div>
        </h1>
        <div
          className="absolute inset-0 flex justify-center text-[7vw] text-gray-500 opacity-15 -top-6 font-extrabold z-0"
        >
          Projects & Activities
        </div>
        <p className="text-[16px] mb-[60px] z-10 text-gray-400 w-10/12 md:w-7/12 text-center">
          "Blending code with an active lifestyle, I tackle complex coding challenges while embracing the dynamic
          energy of sports and social engagements. Whether it's writing algorithms or building connections, I balance
          creativity and precision in every endeavor."
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-[90%]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden ${image.className} transition-transform duration-300 transform ${
              visibleImages.includes(index) ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
            style={{transitionDelay: `${index * 500}ms`}}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20 flex items-center justify-center"
              style={{zIndex: 1}}
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{zIndex: 2}}
            >
              {image.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
