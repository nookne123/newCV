import React, {useEffect, useRef, useState} from "react";

function Resume() {
  const [isVisibleResume, setIsVisibleResume] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0); // เก็บจำนวนการ์ดที่ถูกแสดง
  const sectionRefResume = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleResume(true);
          observer.unobserve(entry.target);
        }
      },
      {threshold: 0.2}
    );

    if (sectionRefResume.current) {
      observer.observe(sectionRefResume.current);
    }

    return () => {
      if (sectionRefResume.current) {

        observer.unobserve(sectionRefResume.current);
      }
    };
  }, []);

  // ค่อยๆ แสดงการ์ดทีละใบเมื่อ isVisibleResume เปลี่ยนเป็น true
  useEffect(() => {
    if (isVisibleResume) {
      const interval = setInterval(() => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
      }, 300); // แสดงการ์ดทุกๆ 300ms

      return () => clearInterval(interval); // ล้าง interval เมื่อ component unmount
    }
  }, [isVisibleResume]);

  return (
    <section
      id="resume"
      ref={sectionRefResume}
      className={`pt-[120px] flex flex-col items-center justify-center duration-1000 transform transition-transform ${
        isVisibleResume ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative">
        <h1 className="text-[50px] font-bold relative z-10 mb-10">Resume</h1>
        <div
          className="absolute inset-0 flex items-center justify-center text-[7vw] text-gray-500 opacity-15 font-extrabold top-5 z-0"
        >
          Resume
        </div>
      </div>
      <div className="text-[16px] mb-[120px] z-10 text-gray-400 px-4 lg:w-7/12 text-center">
        "I bring the front charm and the back power! Whether it’s crafting beautiful, user-friendly interfaces or
        building robust, scalable back-end systems, I handle both sides of the web with creativity and precision.
        I’m Nene Surawut Tiankam, your Full-Stack Developer!"
      </div>
      <div className="grid lg:grid-cols-2 gap-12 lg:w-8/12 px-2">
        {[
          {
            date: "Aug 2023 - Current",
            title: "Back-end Developer",
            company: "Entronica Co., Ltd. | Outsource AIS",
            description:
              "I have been working in backend development for AIS, where I have been involved in developing various projects using a range of technologies such as Golang, Java, JavaScript, and Bash Script. Additionally, I have utilized Kafka and MongoDB and had the opportunity to work with real servers.",
          },
          {
            date: "Apr 2023 - Aug 2023",
            title: "Front-end Developer",
            company: "tansamai group co. ltd",
            description:
              "I worked on a project as a Front-end Developer for a POS system for a client company specializing in Vespa accessories. In this role, I focused on designing and implementing the user interface, ensuring an intuitive and efficient experience for the end users.",
          },
          {
            date: "Oct 2022 - Feb 2023",
            title: "Front-end Developer",
            company: "Senior Project of Naresuan university",
            description:
              "I worked on a project with the Department of Medical Sciences, where I was assigned the role of Front-end Developer. I collaborated with my teammates using GitLab and utilized the Axios API to facilitate communication with the server.",
          },
          {
            date: "Mar 2022 - Jun 2022",
            title: "Front-end intern",
            company: "BiggestFan Productions Co.,Ltd",
            description:
              "I developed website pages using React, Tailwind CSS, and JavaScript. I collaborated with teammates using Git for version control and read documentation related to the technology stack to ensure effective implementation. Additionally, I worked on web3 projects involving blockchain and cryptocurrency, including tasks related to smart contracts on the Ethereum.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`bg-neutral-800 rounded-lg p-[30px] transition-opacity duration-500 transform transition-transform ${
              visibleCards > index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="text-yellow-500 font-extrabold text-[30px] mb-2">{card.date}</div>
            <div className="text-[30px] mb-2">{card.title}</div>
            <div className="text-[16px] text-gray-400 mb-6">{card.company}</div>
            <div className="text-[16px] text-gray-400">{card.description}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-16">
        <a
          href="/SurawutTiankam_resume.pdf"
          download="SurawutTiankam_resume.pdf"
          className="text-2xl font-r`` text-black bg-yellow-500 px-5 py-2 rounded-full w-fit transition-colors duration-500 hover:bg-black hover:text-white border border-yellow-500"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
