export function switchTab(tabName, productList) {
    let contentDiv = document.querySelector("#content");

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
            productCard.appendChild(productImage);

            let productName = document.createElement("div");
            productName.classList.add("product-name");
            productName.textContent = product.name;
            productCard.appendChild(productName);

            productName.after(product.description);

            let productButtonContainer = document.createElement("footer");
            productButtonContainer.classList.add("product-button-container");
            productCard.appendChild(productButtonContainer);

            let productButton = document.createElement("button");
            productButton.classList.add("product-button");
            productButton.textContent = `from ${product.price} $`
            productButtonContainer.appendChild(productButton);
        }
    }

    createCard(productList);
};