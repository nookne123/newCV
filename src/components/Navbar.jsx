import React, {useEffect, useState} from "react";

function Navbar({section, handleSetSection}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sectionNav, setSectionNav] = useState(section)

  const underLine =
    "relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full";

  const handleClick = (item) => (e) => {
    handleSetSection(item);
    setSectionNav(item)
    setIsMobileMenuOpen(false); // ปิดเมนูเมื่อคลิก
  };

  useEffect(() => {
    setSectionNav(section)
  }, [section]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-6 z-50">
      <div className="flex justify-end lg:justify-center items-center">
        {/*<div className="text-white text-2xl font-extrabold"></div>*/}
        <div className="lg:hidden z-50">
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "×" : "≡"}
          </button>
        </div>
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 lg:static lg:bg-transparent fixed inset-0 lg:inset-auto bg-black w-full lg:w-auto h-full lg:h-auto pt-16 lg:pt-0 transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0`}
        >
          {["home", "about", "resume", "skill", "project", "contact"].map((item) => (
            <li key={item} className="text-center lg:px-4 py-2 lg:py-0">
              <a
                href={`#${item}`}
                className={`${underLine} ${
                  sectionNav === item ? "after:left-0 after:w-full text-yellow-400" : "text-white"
                }`}
                onClick={handleClick(item)} // ใช้ฟังก์ชันที่ถูกสร้างขึ้น
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
