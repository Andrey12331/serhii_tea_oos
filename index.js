class Cryptocurrency {
    constructor(name, symbol, price, marketCap) {
        this.name = name;
        this.symbol = symbol;
        this.price = price;
        this.marketCap = marketCap;
    }

    // Метод для оновлення ціни криптовалюти
    updatePrice(newPrice) {
        this.price = newPrice;
    }

    // Метод для отримання деталей криптовалюти в рядковому форматі
    getDetails() {
        return `${this.name} (${this.symbol}): Ціна - ${this.price} USD, Ринкова капіталізація - ${this.marketCap} USD`;
    }
}

// Приклад використання
const bitcoin = new Cryptocurrency('Bitcoin', 'BTC', 45000, 850000000000);
console.log(bitcoin.getDetails()); // Виведе: Bitcoin (BTC): Ціна - 45000 USD, Ринкова капіталізація - 850000000000 USD

// Оновлення ціни Bitcoin
bitcoin.updatePrice(46000);
console.log(bitcoin.getDetails()); // Виведе: Bitcoin (BTC): Ціна - 46000 USD, Ринкова капіталізація - 850000000000 USD
