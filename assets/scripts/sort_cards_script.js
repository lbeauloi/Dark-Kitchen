const buttonStarter = document.querySelector(".starter");
const buttonDish = document.querySelector(".dish");
const buttonDessert = document.querySelector(".dessert");
const buttonAll = document.querySelector(".all");

buttonStarter.addEventListener("click", () => {
    filterMenuByCategory("starter");
  });
  
  buttonDish.addEventListener("click", () => {
    filterMenuByCategory("mainDish");
  });
  
  buttonDessert.addEventListener("click", () => {
    filterMenuByCategory("dessert");
  });
  
  buttonAll.addEventListener("click", () => {
    showAllMenuItems();
  });
  
  function hideAllMenuItems() {
    const menuSections = document.querySelectorAll(".menu__container section");
    menuSections.forEach((section) => {
      section.style.display = "none";
    });
  }

  function showAllMenuItems() {
    const menuSections = document.querySelectorAll(".menu__container section");
    menuSections.forEach((section) => {
      section.style.display = "flex";
    });
  }

  function filterMenuByCategory(category) {
    console.log(`Filtering by category: ${category}`);
  
    hideAllMenuItems();
  
    const categorySection = document.querySelector(`.menu__${category}`);
    console.log(`Displaying section: ${categorySection}`);
    categorySection.style.display = "flex";
  }
  