let addToBasketBtns = document.querySelectorAll(".addToBasket");
let basketCount = 0;

function GetItemCount(itemName) {

    let itemCount;

    let basketItems = document.querySelectorAll(".basketContent.basketItem");

    let itemInBasket = Array.from(basketItems).find(i => i.querySelector(".itemName").innerText === itemName.innerText.split(' ')[0])

    if (itemInBasket == null) {
        itemCount = 0;
    } else {
        itemCount = itemInBasket.querySelector(".itemCount");
    }

    return itemCount;
}

function addItemToBasket(itemName, itemPrice) {

    let basketContent = document.querySelector(".basketContent");
    let basketItem = document.createElement('div');
    basketItem.classList.add("basketItem");

    basketItem.innerHTML = `
              <p class="itemName"> ${itemName.split(" ")[0]}</p>
              <p class="unitaryPrice">${itemPrice}</p>
              <button class="removeItem">-</button>
              <p class="itemCount">1</p>
              <button class="addItem">+</button>`
    basketContent.appendChild(basketItem);
}

function incrementItemCount(currentItem) {

    let basketItems = document.querySelectorAll(".basketContent>.basketItem");
    let itemInBasket = Array.from(basketItems).find(i => i.querySelector(".itemName").innerText === currentItem.querySelector(".itemName").innerText.split(' ')[0])
    itemInBasket.querySelector(".itemCount").innerText++;
}

function isAlreadyInBasket(currentItem) {

    let basketItems = document.querySelectorAll(".basketContent>.basketItem");
    let itemInBasket = Array.from(basketItems).find(i => i.querySelector(".itemName").innerText === currentItem.querySelector(".itemName").innerText.split(' ')[0])

    return itemInBasket !== undefined;

}

for (let btn of addToBasketBtns) {
    btn.addEventListener('click', function () {

        basketCount++;
        let currentItemCount;
        let currentItem = btn.closest(".card");

        if (isAlreadyInBasket(currentItem)) {
            incrementItemCount(currentItem);
        } else {
            addItemToBasket(currentItem.querySelector(".itemName").innerText, currentItem.querySelector(".itemPrice").innerText);
        }


    })
}