import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* // Fonction sombre et clair
const checkbox = document.getElementById("checkbox");
const bodyElement = document.body;

// Vérifiez si un thème est déjà défini dans le localStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  bodyElement.classList.add(currentTheme); // Appliquer le thème stocké
  checkbox.checked = currentTheme === "light-theme"; // Mettre à jour l'état de la case si c'est le mode clair
} else {
  // Si aucun thème n'est défini, on applique le mode sombre par défaut
  bodyElement.classList.add("dark-theme");
  checkbox.checked = false; // Désactiver la case à cocher pour indiquer le mode sombre
}

// Ajouter un écouteur d'événement pour basculer entre les thèmes
checkbox.addEventListener("change", function () {
  if (this.checked) {
    bodyElement.classList.remove("dark-theme");
    bodyElement.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme");
  } else {
    bodyElement.classList.remove("light-theme");
    bodyElement.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  }
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Si l'utilisateur fait défiler vers le bas, masquer la barre de navigation
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // Masquer la barre de navigation (en supposant que la hauteur est de 100px)
  } else {
    navbar.style.top = "0"; // Réafficher la barre de navigation
  }
  lastScrollTop = scrollTop;
});

// Fonction défilement titre
var hotbod = document.querySelector("body");

function doStuff() {
  hotbod.className += " animate";
}

window.onload = function () {
  doStuff();
};

// Fonction typewriter
const h1Element = document.getElementById("typewriter-h1");
const h2Element = document.getElementById("typewriter-h2");

const h1TextBefore = "développeur";
const h1TextAfter = "développeuse web";
const h2Text = "An VU";

let h1Index = 0;
let h1Phase = "writing";
let h2Index = 0;
let currentTextH1 = "";
let currentTextH2 = "";

// Fonction pour l'effet machine à écrire sur h1 et h2
function typeWriter() {
  // Phase d'écriture du h1 ("développeur")
  if (h1Phase === "writing") {
    if (h1Index < h1TextBefore.length) {
      currentTextH1 += h1TextBefore.charAt(h1Index);
      h1Element.textContent = currentTextH1;
      h1Index++;
    } else {
      // Lorsque le "R" est atteint, passer à la phase d'effacement
      h1Phase = "deleting";
    }
  }

  // Phase d'effacement après "R"
  else if (h1Phase === "deleting") {
    if (h1Index > 9) {
      // Effacer jusqu'à l'indice 9 (le "R")
      currentTextH1 = currentTextH1.substring(0, h1Index);
      h1Element.textContent = currentTextH1;
      h1Index--;
    } else {
      // Une fois le "R" effacé, passer à l'ajout de "SE"
      h1Phase = "adding";
      h1Index = 10; // Réinitialiser l'index pour ajouter correctement "SE"
    }
  }

  // Phase d'ajout de "SE" et "web" pour former "développeuse web"
  else if (h1Phase === "adding") {
    if (h1Index < h1TextAfter.length) {
      currentTextH1 += h1TextAfter.charAt(h1Index);
      h1Element.textContent = currentTextH1;
      h1Index++;
    } else {
      // Après avoir écrit "développeuse web", commencer à écrire "An VU"
      if (h2Index < h2Text.length) {
        currentTextH2 += h2Text.charAt(h2Index);
        h2Element.textContent = currentTextH2;
        h2Index++;
      }
    }
  }

  setTimeout(typeWriter, 100);
}

// Fonction pour le bouton plus d'info
document.getElementById("about-btn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});


// Fonction animation section about
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
  const { top } = aboutSection.getBoundingClientRect();
  if (top < window.innerHeight) {
    aboutSection.querySelector("h2").classList.add("visible-h2");
    aboutSection.querySelectorAll("p").forEach((p, index) => {
      p.classList.add("visible-p");
    });
  }
});

// Fonction pour vérifier si l'élément est visible dans la fenêtre
const track = document.getElementById("image-track");
const slider = document.getElementById("carousel-slider");
const images = track.getElementsByClassName("carousel-image");

slider.max = (images.length - 1) * 100;

slider.addEventListener("input", () => {
  const index = Math.round(slider.value / 100);
  track.style.transform = `translateX(-${index * 100}%)`;
});

// Ajuster le slider lors du redimensionnement de la fenêtre
window.addEventListener("resize", () => {
  const index = Math.round(slider.value / 100);
  track.style.transform = `translateX(-${index * 100}%)`;
});

// Fonction fenetre modale
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalLink = document.getElementById("modal-link");
const closeModalBtn = document.querySelector(".close-btn");

// Ouvrir la fenêtre modale avec du contenu spécifique
function openModal(text, link) {
  console.log("Modale ouverte avec le texte:", text, "et le lien:", link);
  //console.log("Texte:", text); // Vérifiez si le texte est bien récupéré
  //console.log("Lien:", link); // Vérifiez si le lien est correct
  modalText.textContent = text;
  modalLink.href = link;
  modal.style.display = "flex"; // Affiche la modale
}

// Fermer la fenêtre modale
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Ferme la modale
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"; // Ferme la modale si on clique en dehors
  }
});

// Gestion de l'ouverture de la modale quand l'image est relâchée
document.querySelectorAll(".image").forEach((image) => {
  image.addEventListener("click", (e) => {
    // Remplacer 'mouseup' par 'click'
    const imageText = image.getAttribute("data-text");
    const imageLink = image.getAttribute("data-link");
    openModal(imageText, imageLink);
  });
});*/
