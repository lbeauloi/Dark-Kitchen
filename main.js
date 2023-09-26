import {generateAll} from "./assets/scripts/inject_cards_script.js";
import {AddSortingListeners} from "./assets/scripts/sort_cards_script.js";
import {darkModeListener} from "./assets/scripts/darkmode.js";
import {backToTopListeners} from "./assets/scripts/backToTopPage.js";
import {BasketListeners} from "./assets/scripts/BasketManager/basket_listeners.js";



generateAll();
AddSortingListeners();
darkModeListener();
backToTopListeners();
BasketListeners();