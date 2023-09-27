import{SetDecrementInBasketListener, SetIncrementInBasketListener} from "./basket_listeners.js";

function AddItemToBasket(itemName, itemPrice) {

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
    SetIncrementInBasketListener(basketItem);
    SetDecrementInBasketListener(basketItem);

    //Add item to basket
    basketContent.appendChild(basketItem);
}



function IncrementBasketItemCount(basketItem) {

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


export{AddItemToBasket, IncrementBasketItemCount, DecrementBasketItemCount, GetBasketItemFromCard}



