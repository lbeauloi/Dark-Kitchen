function darkMode() {
    const element = document.body;
    let cards = document.querySelectorAll(".card");
    element.classList.toggle("dark-mode");
    
    for (let card of cards){
            card.style.backgroundColor = "#313446";
        }
 }


