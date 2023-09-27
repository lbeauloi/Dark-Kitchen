import{SetDecrementInBasketListener, SetIncrementInBasketListener} from "./basket_listeners.js";

function AddItemToBasket(productId) {

    let basketContent = document.querySelector(".basketContent");
    
    let product =(entree.concat(plat,desserts)).find(i => i.productId === productId);

    //create item
    let basketItem = document.createElement('div');
    basketItem.classList.add("basketItem");
    basketItem.innerHTML = `
              <p class="itemName" product_id="${product.productId}"> ${product.name.split(" ")[0]}</p>
              <p class="unitaryPrice">${product.prix}$</p>
              <button class="removeItem">-</button>
              <p class="itemCount">1</p>
              <button class="addItem">+</button>`

    //Add button listeners for add and remove button directly in the basket
    SetIncrementInBasketListener(basketItem);
    SetDecrementInBasketListener(basketItem);

    //Add item to basket
    basketContent.insertBefore(basketItem, basketContent.querySelector(".totalBasket"));
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
        .find(i => Number(i.querySelector(".itemName").getAttribute("product_id")) === Number(card.querySelector("button.addToBasket").getAttribute("product_id")));
}


export{AddItemToBasket, IncrementBasketItemCount, DecrementBasketItemCount, GetBasketItemFromCard}



