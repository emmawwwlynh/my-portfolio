document.addEventListener("DOMContentLoaded", () => {
  // Fonction sombre et clair
  const checkbox = document.getElementById("checkbox");
  const bodyElement = document.body;

  if (checkbox) {
    // Vérifiez si un thème est déjà défini dans le localStorage
    const currentTheme = localStorage.getItem("theme") || "dark-theme";
    bodyElement.classList.add(currentTheme);
    checkbox.checked = currentTheme === "light-theme";

    checkbox.addEventListener("change", () => {
      const newTheme = checkbox.checked ? "light-theme" : "dark-theme";
      bodyElement.classList.remove("light-theme", "dark-theme");
      bodyElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // Fonction typewriter
  const h1Element = document.getElementById("typewriter-h1");
  const cursorElement = document.querySelector(".cursor");

  const h1TextBefore = "développeur";
  const h1TextAfter = "développeuse web";

  let h1Index = 0;
  let currentTextH1 = "";
  let h1Phase = "writing";

  if (h1Element && cursorElement) {
    // Initialisation du curseur
    cursorElement.style.opacity = "1";
    cursorElement.style.animation = "blink 0.7s step-end infinite";

    // Fonction pour l'effet machine à écrire sur h1
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
          currentTextH1 = h1TextAfter.substring(0, h1Index + 1);
          h1Element.textContent = currentTextH1;
          h1Index++;
        } else {
          h1Phase = "completed";
        }
      }

      // Continuer l'animation tant que le texte n'est pas terminé
      if (h1Phase !== "completed") {
        setTimeout(typeWriter, 120);
      }
    }

    typeWriter();
  }

  // Fonction affichage navbar au scroll
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Si l'utilisateur fait défiler vers le bas, masquer la barre de navigation
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  }

  // Fonction pour le bouton plus d'info
  const smoothScrollElements = document.querySelectorAll(
    "#about-btn, .nav-menu a"
  );

  smoothScrollElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = element.getAttribute("href") || element.dataset.target;

      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Fonction apparition texte au scroll vers le bas
  /*let scrollTimeout;

  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      document.querySelectorAll(".block").forEach((section) => {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          section.querySelectorAll("h2, p").forEach((el) => {
            if (!el.classList.contains("visible-p")) {
              el.classList.add("visible-p");
            }
          });
        }
      });
    }, 200);
  });
  */
  const blocks = document.querySelectorAll(".block");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll("h2, p").forEach((el) => {
            el.classList.add("visible-p");
          });
          observer.unobserve(entry.target); // Une fois visible, on n'a plus besoin de l'observer
        }
      });
    },
    {
      threshold: 0.1, // Lorsque 10% de l'élément est visible
    }
  );

  blocks.forEach((block) => {
    observer.observe(block);
  });

  // Fonction pour retourner les cards
  const cardContainers = document.querySelectorAll(".quality-container");

  // Ajouter l'événement de clic à chaque conteneur de carte
  cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener("click", () => {
      cardContainer.classList.toggle("flip");
    });
  });

  // Ajouter l'événement de défilement pour cacher les versos des cartes retournées
  window.addEventListener("scroll", () => {
    cardContainers.forEach((cardContainer) => {
      if (cardContainer.classList.contains("flip")) {
        cardContainer.classList.remove("flip");
      }
    });
  });

  /* Formulaire de contact check
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !subject || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Veuillez saisir une adresse email valide.");
        return;
      }

      // Envoi via EmailJS (vérifiez que les paramètres sont corrects)
      emailjs.send("", "template_qc5pn0b", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        alert("Votre message a été envoyé avec succès !");
        contactForm.reset();
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
      });
    });

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
} 
  }*/
});
