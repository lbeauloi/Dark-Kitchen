let starter = document.querySelector(".menu__starter");
let main = document.querySelector(".menu__mainDish");
let sugar = document.querySelector(".menu__dessert");

entree.forEach((dish) => {
let article = document.createElement("article");
article.innerHTML = `<figure class="card__figure">
<img src="${dish.affiche}" >
</figure>
<h3>${dish.name}</h3>
<div class="card__footer">
<p>${dish.prix}€</p>
<a href="#"><img src="assets/img/addToBag.png" alt="logo plus"></a>
</div>`;
starter.appendChild(article);
article.setAttribute("class", "card");
});

plat.forEach((dish) => {
    let article = document.createElement("article");
    article.innerHTML = `<figure class="card__figure">
    <img src="${dish.affiche}" >
    </figure>
    <h3>${dish.name}</h3>
    <div class="card__footer">
    <p>${dish.prix}€</p>
    <a href="#"><img src="assets/img/addToBag.png" alt="logo plus"></a>
    </div>`;
    main.appendChild(article);
    article.setAttribute("class", "card");
    });

desserts.forEach((dish) => {
    let article = document.createElement("article");
    article.innerHTML = `<figure class="card__figure">
    <img src="${dish.affiche}" >
    </figure>
    <h3>${dish.name}</h3>
    <div class="card__footer">
    <p>${dish.prix}€</p>
    <a href="#"><img src="assets/img/addToBag.png" alt="logo plus"></a>
    </div>`;
    sugar.appendChild(article);
    article.setAttribute("class", "card");
    });