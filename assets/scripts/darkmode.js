function darkMode() {
    const element = document.body;
    let cards = document.querySelectorAll(".card");
    element.classList.toggle("dark-mode");
    
    for (let card of cards){
            card.style.backgroundColor = "#313446";
        }
 }


let checkbox = document.querySelector("input[id=toggleSwitch]");
const body = document.body;
checkbox.addEventListener('change', function() {
  if (this.checked) {


    body.classList.add("dark-mode");
    console.log("Checkbox is checked..");
  } else {
    body.classList.remove("dark-mode");
    console.log("Checkbox is not checked..");
  }
});