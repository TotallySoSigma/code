function convertToCoins(amount) {
    const money = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
    }
    if (amount > 24) {
        money.quarters += Math.floor(amount / 25);
        amount = amount % 25;
    }
    if (amount > 9) {
        money.dimes += Math.floor(amount / 10);
        amount = amount % 10;
    }
    if (amount > 4) {
        money.nickels += Math.floor(amount / 5);
        amount = amount % 5;
    }
    if (amount > 0) {
        money.pennies += amount;
    }
    return money;
}
const amount = 41;
console.log(convertToCoins(amount));