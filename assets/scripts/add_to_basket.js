//Get all "add" button
let addToBasketBtns = document.querySelectorAll(".addToBasket");
let basketCount = 0;

//EventListener to add an item in the basket
for (let btn of addToBasketBtns) {
    btn.addEventListener('click', function () {

        basketCount++;
        let currentCard = btn.closest(".card");

        //check if item already exists in basket 
        let basketItem = GetBasketItemFromCard(currentCard);

        if (basketItem !== undefined) {
            //if it does, increment the count for this item
            incrementBasketItemCount(basketItem);
        } else {
            //If not - create item
            addItemToBasket(currentCard.querySelector(".itemName").innerText, currentCard.querySelector(".itemPrice").innerText);
        }


    })
}

function addItemToBasket(itemName, itemPrice) {

    let basketContent = document.querySelector(".basketContent");

    //create item
    let basketItem = document.createElement('div');
    basketItem.classList.add("basketItem");
    basketItem.innerHTML = `
              <p class="itemName"> ${itemName.split(" ")[0]}</p>
              <p class="unitaryPrice">${itemPrice}</p>
              <button class="removeItem">-</button>
              <p class="itemCount">1</p>
              <button class="addItem">+</button>`

    //Add button listeners for add and remove button directly in the basket

    setIncrementInBasketListener(basketItem);
    SetDecrementInBasketListener(basketItem);

    //Add item to basket
    basketContent.appendChild(basketItem);
}

function setIncrementInBasketListener(basketItem) {
    basketItem.querySelector(".addItem").addEventListener('click', function () {

        incrementBasketItemCount(basketItem);
    });
}

function SetDecrementInBasketListener(basketItem) {

    basketItem.querySelector(".removeItem").addEventListener('click', function () {

        DecrementBasketItemCount(basketItem);
    });
}

function incrementBasketItemCount(basketItem) {

    basketItem.querySelector(".itemCount").innerText++;


}
function DecrementBasketItemCount(basketItem) {
    let currentCount = basketItem.querySelector(".itemCount").innerText;

    if (Number(currentCount) > 1) {
        basketItem.querySelector(".itemCount").innerText--;
    } else if (Number(currentCount) === 1) {

        //remove item from basket when count == 0;
        basketItem.remove();
    }
}

function GetBasketItemFromCard(card) {
    let basketItems = document.querySelectorAll(".basketContent>.basketItem");

    return Array.from(basketItems)
        .find(i => i.querySelector(".itemName").innerText === card.querySelector(".itemName").innerText.split(' ')[0]);
}



