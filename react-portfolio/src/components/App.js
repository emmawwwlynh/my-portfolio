import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";

import styles from "../css/style-bg.css";

const App = () => {
  return (
    <div>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navbar />
      <section className={styles.parallaxSection}>
        <h1 className="title-job">
          <span className="dev-web" id="typewriter-h1">
            développeur web
          </span>
        </h1>
        <br />
        <h2 className="title-name">
          <span className="an-vu" id="typewriter-h2">
            An VU
          </span>
        </h2>
        <button id="about-btn" className="skeuomorphic-btn">
          Plus d'Info
        </button>
      </section>
      <About />
      <Projects />
      {/* Ajoutez d'autres sections si nécessaire */}
    </div>
  );
};

export default App;
