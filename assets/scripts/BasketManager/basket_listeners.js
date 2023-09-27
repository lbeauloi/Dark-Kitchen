import{GetBasketItemFromCard, IncrementBasketItemCount, DecrementBasketItemCount, AddItemToBasket, } from "./items_manager.js";
import {DisplayItemCount, DisplayTotalPrice} from "./total_counts.js";
//Get all "add" button from card elements
let addButtons = document.querySelectorAll(".addToBasket");

addItemListeners(addButtons);

function addItemListeners(addButtons){
    for (let btn of addButtons) {
        btn.addEventListener('click', function () {

            let currentCard = btn.closest(".card");

            //check if item already exists in basket 
            let basketItem = GetBasketItemFromCard(currentCard);

            if (basketItem !== undefined) {
                //if it does, increment the count for this item
                IncrementBasketItemCount(basketItem);
            } else {
                //If not - create item
                AddItemToBasket(currentCard.querySelector(".itemName").innerText, currentCard.querySelector(".itemPrice").innerText);
            }

            //update total item count;
            DisplayItemCount();
            DisplayTotalPrice();

        })
    }
}

//To call when a new item is added in the basket
function SetIncrementInBasketListener(basketItem) {
    basketItem.querySelector(".addItem").addEventListener('click', function () {

        IncrementBasketItemCount(basketItem);
        //update total item count;
        DisplayItemCount();
        DisplayTotalPrice();
    });
}

function SetDecrementInBasketListener(basketItem) {

    basketItem.querySelector(".removeItem").addEventListener('click', function () {

        DecrementBasketItemCount(basketItem);
        //update total item count;
        DisplayItemCount();
        DisplayTotalPrice();
    });
}

export{SetIncrementInBasketListener, SetDecrementInBasketListener}