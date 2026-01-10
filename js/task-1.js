function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice >= customerCredits) {
        const quantity = 5;
        const pricePerDroid = 3000;
        const customerCredits = 23000;
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }

    if (totalPrice >= customerCredits) {
        const quantity = 3;
        const pricePerDroid = 1000;
        const customerCredits = 15000;
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }

    if (totalPrice > customerCredits) {
        const quantity = 10;
        const pricePerDroid = 5000;
        const customerCredits = 8000;
        return "Insufficient funds!";
    }

    else if (totalPrice > customerCredits) {
        const quantity = 8;
        const pricePerDroid = 2000;
        const customerCredits = 10000;
        return "Insufficient funds!";
    }

    else if (totalPrice >= customerCredits) {
        const quantity = 10;
        const pricePerDroid = 500;
        const customerCredits = 5000;
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
