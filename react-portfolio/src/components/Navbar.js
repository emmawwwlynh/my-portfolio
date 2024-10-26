import React, { useState, useEffect, useRef } from "react";
import styles from "../css/Navbar.module.css";
import "../css/style.css";

const Navbar = () => {
  const [theme, setTheme] = useState("dark-theme");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navbarRef = useRef(null);

  // Charger le thème depuis le localStorage lors de l'initialisation
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add("dark-theme");
    }
  }, []);

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    document.body.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Fonction apparition/disparition de la navbar lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Si l'utilisateur défile vers le bas, on masque la navbar
      if (scrollTop > lastScrollTop) {
        navbarRef.current.style.top = "-100px";
      } else {
        navbarRef.current.style.top = "0";
      }

      setLastScrollTop(scrollTop);
    };

    // Ajout de l'écouteur de scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={styles.navbar}>
      <div>
        <img
          src="/img/dog.jpeg"
          alt="profil An VU"
          className={styles.profilePhoto}
        />
      </div>

      <ul className={styles.navMenu}>
        <li>
          <a href="#about" className={styles.link}>
            À Propos
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.link}>
            Projets
          </a>
        </li>
        <li>
          <a href="#education" className={styles.link}>
            Formation
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </li>
      </ul>

      <div className={styles.themeSwitchWrapper}>
        <span className={styles.darkModeText}>Sombre</span>
        <label className={styles.themeSwitch} htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            checked={theme === "light-theme"}
            onChange={toggleTheme}
          />
          <div className={`${styles.slider} ${styles.round}`}></div>
        </label>
        <span className={styles.lightModeText}>Clair</span>
      </div>
    </nav>
  );
};

export default Navbar;
