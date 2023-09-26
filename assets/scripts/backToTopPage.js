// on masque le bouton de base (logique on est deja au top de la page)
let backToTop = document.querySelector(".ToTopButton");
backToTop.style.display = "none";

// eventlistener pour afficher le bouton dès que l'utilisateur scroll
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  if (window.pageYOffset > 250) {
    //on fait apparaitre le bouton dès que l'utilisateur a scroll de 250px verticalement
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none"; //si l'utilisateur n'a pas scroll> 250px, le display reste sur none
  }
}

// eventlistener pour quand on clique sur le bouton
backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
