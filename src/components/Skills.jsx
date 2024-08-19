import React, {useEffect, useRef, useState} from "react";

function Skills() {
  const [isVisibleSkills, setIsVisibleSkills] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);
  const sectionRefSkills = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleSkills(true);
          observer.unobserve(entry.target);
        }
      },
      {threshold: 0.20}
    );

    if (sectionRefSkills.current) {
      observer.observe(sectionRefSkills.current);
    }

    return () => {
      if (sectionRefSkills.current) {

        observer.unobserve(sectionRefSkills.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisibleSkills) {
      const interval = setInterval(() => {
        setVisibleCards((prevVisibleCards) => {
          const newCount = prevVisibleCards + 1;
          return newCount;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isVisibleSkills]);

  return (
    <section id="skill" ref={sectionRefSkills} className="pt-[130px] flex flex-col items-center justify-center">
      <div className="relative">
        <h1 className="text-[50px] font-bold relative z-10 mb-10">My Skills</h1>
        <div
          className="absolute inset-0 flex items-center justify-center text-[7vw] text-gray-500 opacity-15 font-extrabold top-5 z-0"
        >
          Skills
        </div>
      </div>
      <div className="text-[16px] mb-[120px] z-10 text-gray-400 px-4 lg:w-7/12 text-center">
        "With the power of coding, I can breathe life into websites. Whether it's the front-end, like an artist painting
        a beautiful canvas, or the back-end, like an engineer digging deep to build a solid foundation behind the
        scenes, I'm ready to take on any challenge!"
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 lg:w-8/12">
        {[
          {
            img: "https://img.icons8.com/arcade/128/javascript.png",
            alt: "JavaScript",
            text: "JavaScript",
          },
          {
            img: "https://cdn.icon-icons.com/icons2/2699/PNG/128/golang_logo_icon_171073.png",
            alt: "Golang",
            text: "Golang",
          },
          {
            img: "https://img.icons8.com/color/128/java-coffee-cup-logo--v1.png",
            alt: "java",
            text: "Java",
          },
          {
            img: "https://img.icons8.com/color/128/bash.png",
            alt: "Bash-Script",
            text: "Bash",
          },
          {
            img: "https://img.icons8.com/fluency/128/node-js.png",
            alt: "Node.js",
            text: "Node.js",
          },
          {
            img: "https://img.icons8.com/bubbles/128/react.png",
            alt: "React",
            text: "React",
          },
          {
            img: "https://img.icons8.com/color/128/vue-js.png",
            alt: "Vue.js",
            text: "Vue.js",
          },
          {
            img: "https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_tailwind_icon_130128.png",
            alt: "Tailwind CSS",
            text: "Tailwind",
          },
          {
            img: "https://img.icons8.com/color/128/html-5--v1.png",
            alt: "html-5--v1",
            text: "HTML5",
          },
          {
            img: "https://img.icons8.com/color/128/css3.png",
            alt: "CSS",
            text: "CSS",
          },
          {
            img: "https://img.icons8.com/color/128/my-sql.png",
            alt: "sql",
            text: "SQL",
          },
          {
            img: "https://img.icons8.com/external-tal-revivo-green-tal-revivo/128/external-postman-is-the-only-complete-api-development-environment-logo-green-tal-revivo.png",
            alt: "Postman",
            text: "Postman",
          },
          {
            img: "https://img.icons8.com/color/128/git.png",
            alt: "Git",
            text: "Git",
          },
          {
            img: "https://img.icons8.com/color/128/mongo-db.png",
            alt: "Mongo-db",
            text: "Mongo",
          },
          {
            img: "https://img.icons8.com/nolan/128/apache-kafka.png",
            alt: "kafka",
            text: "Kafka",
          },
          {
            img: "https://img.icons8.com/color/128/docker.png",
            alt: "Docker",
            text: "Docker",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-opacity duration-500 transform ${
              visibleCards > index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              className="group flex flex-col justify-center items-center w-full p-4 lg:p-8 bg-neutral-800 transition-all duration-500 rounded-lg hover:bg-yellow-500 hover:text-black shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <img
                width="128"
                height="128"
                src={card.img}
                alt={card.alt}
                className="transition-transform duration-300 px-4 lg:px-0 group-hover:scale-125"
              />
              <div className="mt-6 mb-3 text-md lg:text-lg font-semibold">{card.text}</div>
              <div
                className="bg-yellow-500 h-[2px] w-[60px] rounded-full transition-colors duration-300 group-hover:bg-white"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
