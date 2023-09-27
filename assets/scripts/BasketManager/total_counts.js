

//Display the total count on the basket element
function DisplayItemCount(){

    let totalCount = GetItemsCountInBasket();
    let basketElement = document.querySelector(".basketButton");
    let countBasketElement = basketElement.querySelector(".countBasket");

    //If nothing in basket, remove total count element from html
    if(totalCount<1){
        countBasketElement.remove();
    }
    else{
        //If one or more element -- create total count element is does not exist and then put the total count in it
        if(countBasketElement === null){
            countBasketElement = document.createElement('div');
            countBasketElement.classList.add("countBasket");
            basketElement.appendChild(countBasketElement);
        }
        document.querySelector(".countBasket").innerText=GetItemsCountInBasket();
    }

}

//get the total items count in the basket
function GetItemsCountInBasket(){

    let totalCount=0;
    let allBasketItemsCount = document.querySelectorAll(".basketContent>.basketItem>.itemCount");

    for(let count of allBasketItemsCount){

        totalCount+=Number(count.innerText);
    }

    return totalCount;

}

function GetTotalPrice(){
    
    let totalPrice = 0;
    
    if(GetItemsCountInBasket() === 0){
        return 0;
    }

    const priceRegex = /[0-9]{1,2}/g;
    // let subPrices = Array.from(document.querySelectorAll(".basketContent>.basketItem")).reduce((a,c) => 
    //     a + ((Number(c.querySelector(".itemCount").innerText))*(Number(c.querySelector(".itemPrice").innerText.trim().split(priceRegex)))),0
    //     );

    //debug
    
    let arr = Array.from(document.querySelectorAll(".basketContent>.basketItem"));
    let itemCount = arr[0].querySelector(".itemCount").innerText;
    let itemPrice= arr[0].querySelector(".itemPrice").innerText.trim().split(priceRegex);
    
    let pr = arr.map((x) =>
        Number(x.querySelector(".itemCount").innerText) * Number(x.querySelector(".itemPrice").innerText.trim().split(priceRegex)));
    
    let subPrices = Array.from(document.querySelectorAll(".basketContent>.basketItem")).map((x) => 
        Number(x.querySelector(".itemCount").innerText) * Number(x.querySelector(".itemPrice").innerText.trim().split(priceRegex)) );
    
    for(let p of subPrices){
        totalPrice+=p;
    }
    return totalPrice;
}

function DisplayTotalPrice() {
    document.querySelector(".totalBasket").innerText = GetTotalPrice();
}

export {DisplayItemCount, GetItemsCountInBasket, DisplayTotalPrice}