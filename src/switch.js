export function switchTab(tabName, productList) {
    let contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    let header = document.createElement("h2");
    header.textContent = tabName;
    contentDiv.appendChild(header);

    function createCard(list) {
        for (let product of list) {
            let productCard = document.createElement("article");
            productCard.classList.add("product-card");
            contentDiv.appendChild(productCard);

            let productInformation = document.createElement("div");
            productInformation.classList.add("product-information")
            productCard.appendChild(productInformation);

            let productImage = document.createElement("img");
            productImage.classList.add("product-image");
            productImage.setAttribute("src", product.image);
            productInformation.appendChild(productImage);

            let productName = document.createElement("div");
            productName.classList.add("product-name");
            productName.textContent = product.name;
            productInformation.appendChild(productName);

            productName.after(product.description);

            let productButtonContainer = document.createElement("footer");
            productButtonContainer.classList.add("product-button-container");
            productCard.appendChild(productButtonContainer);

            let productButton = document.createElement("button");
            productButton.classList.add("product-button");
            productButton.textContent = `from ${product.price} $`
            productButton.addEventListener("click", showPopup);
            productButtonContainer.appendChild(productButton);
        }
    }

    createCard(productList);
};

function showPopup () {
    console.log("popup");
    let popupContainer = document.querySelector("#popup-container");
    popupContainer.textContent = "";

    let popupBackground = document.createElement("div");
    popupBackground.classList.add("popup-background");
    popupBackground.addEventListener("click", () => popupContainer.textContent = "");
    
    
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.addEventListener("click", (event) => event.stopPropagation());
    popupBackground.appendChild(popup);

    let popupHeader = document.createElement("div");
    popupHeader.classList.add("header");
    popup.appendChild(popupHeader);

    let popupTitleContainer = document.createElement("div");
    popupTitleContainer.classList.add("title-container");
    popupHeader.appendChild(popupTitleContainer);

    let popupTitle = document.createElement("h2");
    popupTitle.classList.add("title");
    popupTitle.textContent = "What's your address?";
    popupTitleContainer.appendChild(popupTitle);

    let closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", () => popupContainer.textContent = "");
    popupTitleContainer.appendChild(closeButton);

    let subtitle = document.createElement("h3");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "We'll check that you are in the delivery zone and save your address for future orders.";
    popupHeader.appendChild(subtitle);


    let popupActions = document.createElement("div");
    popupActions.classList.add("actions");
    popup.appendChild(popupActions);

    let buttonOrange = document.createElement("button");
    buttonOrange.classList.add("button-orange");
    buttonOrange.textContent = "Specify the delivery address";
    popupActions.appendChild(buttonOrange);

    let buttonGray = document.createElement("button");
    buttonGray.classList.add("button-gray");
    buttonGray.textContent = "Or Try Takeaway";
    popupActions.appendChild(buttonGray);


    let popupFooter = document.createElement("footer");
    popupFooter.classList.add("footer");
    popupFooter.textContent = "Have an account already?";
    popup.appendChild(popupFooter);

    let popupFooterButton = document.createElement("button");
    popupFooterButton.classList.add("popup-footer-button");
    popupFooterButton.textContent = "Log in"
    popupFooter.appendChild(popupFooterButton);

    popupContainer.appendChild(popupBackground);
}