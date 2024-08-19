import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [section, setSection] = useState("");

  function handleSetSection(section) {
    return (event) => {
      event.preventDefault();
      setSection(section);

      const sectionElement = document.querySelector(`#${section}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({behavior: "smooth", block: "start"});
      }
    };
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null, // viewport ปกติ
      rootMargin: "0px",
      threshold: 0.5, // 50% ของ section ต้องปรากฏใน viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentSection = entry.target.id;
          setSection(currentSection);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Cleanup observer เมื่อ component ถูก unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar section={section} handleSetSection={handleSetSection}/>
      </div>
      <Home id="home"/>
      <About id="about"/>
      <Resume id="resume"/>
      <Skills id="skills"/>
      <Project id="project"/>
      <Contact id="contact" handleSetSection={handleSetSection}/>
    </div>
  );
}

export default App;
