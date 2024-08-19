import React, {useEffect, useRef, useState} from 'react';
import '../styles/styles.css'; // นำเข้าฟายล์ CSS

function Home() {
  const [showProfile1, setShowProfile1] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowProfile1(prevState => !prevState);
    }, 4000); // สลับภาพทุก 4 วินาที

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative h-screen flex flex-col items-center justify-center p-4">
      <div className="relative w-full">
        {/* Profile 1 */}
        <div
          className={`absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-6 transition-opacity duration-1000 ${
            showProfile1 ? 'opacity-100 fade-in' : 'opacity-0 fade-out'
          }`}
        >
          <img src="/images/Nene_2.png" alt="Profile 1" className="w-full lg:max-w-[500px] max-w-[400px] h-auto"/>
          <div className="text-center px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-yellow-500">Hello!</h1>
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mt-4">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold">I'am</h1>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold text-yellow-500">Nene</h1>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-500 mt-2">Surawut Tiankam</h1>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mt-2">a Web Developer</h1>
            <div className="relative flex flex-row items-center gap-4 md:gap-6 mt-6 z-10 justify-end">
              <button
                className="relative text-lg md:text-xl font-light border border-gray-500 px-4 py-1 rounded-full bg-transparent overflow-hidden transition-colors duration-300 hover:bg-yellow-500 frontend hover:border-0">
                Front-end
              </button>
              <button
                className="text-lg md:text-xl font-light bg-yellow-500 px-4 py-1 rounded-full backend transition-colors duration-300">
                Back-end
              </button>
            </div>
          </div>
        </div>

        {/* Profile 2 */}
        <div
          className={`absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-6 transition-opacity duration-1000 ${
            showProfile1 ? 'opacity-0 fade-out' : 'opacity-100 fade-in'
          }`}
        >
          <img src="/images/Nene_1.png" alt="Profile 2" className="w-full lg:max-w-[500px] max-w-[400px] h-auto"/>
          <div className="text-center px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-yellow-500">Hello!</h1>
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mt-4">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">I'am</h1>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-500">a Web</h1>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-extrabold text-yellow-500 mt-2">Developer</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mt-2">in Bangkok Thailand</h1>
            <div className="relative flex flex-row items-center gap-4 md:gap-6 mt-6 z-10 justify-end">
              <button
                className="relative text-lg md:text-xl font-light border border-gray-500 px-4 py-1 rounded-full bg-transparent overflow-hidden transition-colors duration-300 hover:bg-yellow-500 frontend hover:border-0">
                Front-end
              </button>
              <button
                className="text-lg md:text-xl font-light bg-yellow-500 px-4 py-1 rounded-full backend transition-colors duration-300">
                Back-end
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
