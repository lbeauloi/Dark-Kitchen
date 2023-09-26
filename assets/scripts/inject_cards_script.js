let starter = document.querySelector(".menu__starter");
let main = document.querySelector(".menu__mainDish");
let sugar = document.querySelector(".menu__dessert");

function generateMenuItem(category, menuData) {
  const menuSection = document.querySelector(`.menu__${category}`);
  
  menuData.forEach((dish) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <figure class="card__figure">
        <img src="${dish.affiche}" alt="${dish.name}">
      </figure>
      <h3>${dish.name}</h3>
      <div class="card__footer">
        <p>${dish.prix}€</p>
        <button class = "addToBasket"><img src="assets/img/addToBag.png" alt="Add to Bag"></button>
      </div>
    `;

    article.classList.add("card");
    menuSection.appendChild(article);
  });
}

function generateAll() {
  generateMenuItem("starter", entree);
  generateMenuItem("mainDish", plat);
  generateMenuItem("dessert", desserts);
}

generateAll();
