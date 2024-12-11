document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".carousel .word");
    let currentIndex = 0;

    function showNextWord() {
      words[currentIndex].classList.remove("active"); // Cache l'élément actuel
      currentIndex = (currentIndex + 1) % words.length; // Passe au suivant
      words[currentIndex].classList.add("active"); // Montre le suivant
    }

    // Initialisation : activer la première citation
    words[currentIndex].classList.add("active");

    // Changer de citation toutes les 3 secondes
    setInterval(showNextWord, 5000); // Change toutes les 5 secondes
  });