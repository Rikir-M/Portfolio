import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 3000;
    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, []);

  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    if (!loading) {
      const pageYOffset = window.scrollY;
      let newActiveSection = null;

      sections.current.forEach((section) => {
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          pageYOffset > sectionOffsetTop - 100 &&
          pageYOffset < sectionOffsetTop + sectionHeight
        ) {
          return (newActiveSection = section.id);
        }
      });

      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    sections.current = document.querySelectorAll(".data-section");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]); 

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="">
          <Home data={activeSection} />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;
