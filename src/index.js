import { switchTab } from "./switch.js";
import { pizzaList } from "./pizza-tab/pizza-tab.js";

let pizzaTabButton = document.querySelector("#pizza");
pizzaTabButton.addEventListener("click", () => {switchTab("Pizza", pizzaList)});
