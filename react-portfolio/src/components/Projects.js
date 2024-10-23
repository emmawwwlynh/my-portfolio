import React, { useState } from "react";

const Projects = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    // Logique pour déplacer les images
  };

  return (
    <section id="projects" className="projects-section">
      <div className="block">
        <h2 className="hidden">Projets</h2>
        <p>
          Au cours de ma formation Développement Web & Mobile, je réaliserai
          plusieurs répliques d'applications Web...
        </p>
      </div>
      <div id="carousel-container">
        <div id="image-track" className="image-track">
          {/* Remplacez les images par des composants ou un tableau d'objets */}
          <img
            className="image"
            src="image-url"
            alt="Description"
            draggable="false"
          />
          {/* Ajoutez d'autres images comme ci-dessus */}
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          id="carousel-slider"
        />
      </div>
    </section>
  );
};

export default Projects;
