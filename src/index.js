import "./style.css"
import { switchTab } from "./switch.js";
import { pizzaList } from "./pizza-tab/pizza-tab.js";
import { snackList } from "./snacks-tab/snacks-tab.js";
import { coffeeList } from "./coffee-tab/coffee-tab.js";

let pizzaTabButton = document.querySelector("#pizza");
pizzaTabButton.addEventListener("click", (event) => {
    switchTab("Pizza", pizzaList);
    clearActive();
    event.target.dataset.active = "true";
});

let snacksTabButton = document.querySelector("#snacks");
snacksTabButton.addEventListener("click", (event) => {
    switchTab("Snacks", snackList);
    clearActive();
    event.target.dataset.active = "true";
});

let coffeeTabButton = document.querySelector("#coffee");
coffeeTabButton.addEventListener("click", (event) => {
    switchTab("Coffee", coffeeList);
    clearActive();
    event.target.dataset.active = "true";
});

function clearActive() {
    let navigationButtons = document.querySelectorAll("nav button");
    navigationButtons.forEach((button) => {  button.dataset.active = "false"; });
};

switchTab("Pizza", pizzaList);
pizzaTabButton.dataset.active = "true";
