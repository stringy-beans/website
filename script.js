document.getElementById('add-item').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const selectedItem = menu.options[menu.selectedIndex];
    const itemName = selectedItem.textContent;
    const itemPrice = parseFloat(selectedItem.getAttribute('data-price'));
    const quantity = parseInt(document.getElementById('quantity').value);

    if (itemName !== "Select an item" && quantity > 0) {
        const itemList = document.getElementById('item-list');
        const totalSpan = document.getElementById('total');

        // Calculate total for this item
        const itemTotal = itemPrice * quantity;

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = `${itemName} (x${quantity}): $${itemTotal.toFixed(2)}`;
        itemList.appendChild(li);

        // Update the total
        const currentTotal = parseFloat(totalSpan.textContent);
        const newTotal = currentTotal + itemTotal;
        totalSpan.textContent = newTotal.toFixed(2);

        // Reset menu and quantity
        menu.selectedIndex = 0;
        document.getElementById('quantity').value = 1;
    } else {
        alert("Please select an item and enter a valid quantity.");
    }
});
