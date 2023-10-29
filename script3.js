const shoppingList = [];

function addItem() {
    const productName = document.getElementById("productName").value;
    const productQuantity = parseInt(document.getElementById("productQuantity").value);

    if (productName && productQuantity) {
        const existingItem = shoppingList.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += productQuantity;
        } else {
            shoppingList.push({ name: productName, quantity: productQuantity, purchased: false });
        }

        document.getElementById("productName").value = "";
        document.getElementById("productQuantity").value = "";
    }
}

function displayShoppingList() {
    const shoppingListElement = document.getElementById("shoppingList");
    shoppingListElement.innerHTML = "";

    const purchasedItems = shoppingList.filter(item => item.purchased);
    const unpurchasedItems = shoppingList.filter(item => !item.purchased);

    const sortedList = unpurchasedItems.concat(purchasedItems);

    for (const item of sortedList) {
        const itemElement = document.createElement("li");
        itemElement.textContent = `${item.name} (${item.quantity} шт.) ${item.purchased ? "(куплено)" : ""}`;
        shoppingListElement.appendChild(itemElement);
    }
}

function purchaseProduct(productName) {
    const product = shoppingList.find(item => item.name === productName);
    if (product) {
        product.purchased = true;
        displayShoppingList();
    }
}