import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const onScroll = () => {
      const { top } = aboutSection.getBoundingClientRect();
      if (top < window.innerHeight) {
        aboutSection.querySelector("h2").classList.add("visible-h2");
        aboutSection.querySelectorAll("p").forEach((p, index) => {
          p.classList.add("visible-p");
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="block">
        <h2 className="hidden">À propos de moi</h2>
        <p className="seo-kw hidden">Avec plus de 18 ans d'expérience...</p>
        <p className="seo-kw hidden">
          Grâce à mon parcours, je conçois des sites...
        </p>
      </div>
      <div className="v-arrow-container">
        <div className="v-arrow"></div>
      </div>
    </section>
  );
};

export default About;
