import {GetBasketItemFromCard, IncrementBasketItemCount, DecrementBasketItemCount, AddItemToBasket,} from "./items_manager.js";
import {DisplayItemCount, DisplayTotalPrice} from "./total_counts.js";

//Get all "add" button from card elements
let addButtons = document.querySelectorAll(".addToBasket");
let basketButton = document.querySelector(".basketButton");
let basketContent = document.querySelector(".basketContent");



addItemListeners(addButtons);
displayHideListener(basketButton, basketContent);


function displayHideListener(button, element) {
    button.addEventListener('click', function () {

        DisplayHiddeElement(element);

    })
}

function addItemListeners(addButtons) {
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
                AddItemToBasket(Number(currentCard.querySelector("button.addToBasket").getAttribute("product_id")));
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

function DisplayHiddeElement(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

export {SetIncrementInBasketListener, SetDecrementInBasketListener}