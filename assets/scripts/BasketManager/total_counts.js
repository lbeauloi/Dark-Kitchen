//Display the total count on the basket element
function DisplayItemCount() {

    let totalCount = GetItemsCountInBasket();

    let basketElement = document.querySelector(".basketButton");
    let countBasketElement = basketElement.querySelector(".countBasket");

    //If nothing in basket, remove total count element from html
    if (totalCount < 1) {
        countBasketElement.remove();
    } else {
        //If one or more element -- create total count element is does not exist and then put the total count in it
        if (countBasketElement === null) {
            countBasketElement = document.createElement('div');
            countBasketElement.classList.add("countBasket");
            basketElement.appendChild(countBasketElement);
        }
        document.querySelector(".countBasket").innerText = GetItemsCountInBasket();
    }

}

//get the total items count in the basket
function GetItemsCountInBasket() {

    let totalCount = 0;
    let allBasketItemsCount = document.querySelectorAll(".basketContent>.basketItem>.itemCount");

    for (let count of allBasketItemsCount) {

        totalCount += Number(count.innerText);
    }

    return totalCount;

}

function FindProduct(productId) {
    return (entree.concat(plat, desserts)).find(i => i.productId === productId);
}

function GetTotalPrice() {

    let totalPrice = 0;

    if (GetItemsCountInBasket() === 0) {
        return 0;
    }
 

    let items = Array.from(document.querySelectorAll(".basketContent>.basketItem"));

    for (let i of items) {

        let itemCount = Number(i.querySelector(".itemCount").innerText);
        let productPrice = FindProduct(Number(i.querySelector("p.itemName").getAttribute("product_id"))).prix;
        totalPrice+=(itemCount*productPrice);
    }

    return totalPrice;
}

function DisplayTotalPrice() {
    document.querySelector(".totalBasket").innerText = `${GetTotalPrice()}$`;
}

export {DisplayItemCount, GetItemsCountInBasket, DisplayTotalPrice}