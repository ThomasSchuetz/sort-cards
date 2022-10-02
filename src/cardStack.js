
class CardStack {
    constructor(min = 2, max = 99) {
        if (min > max) {
            throw new RangeError("Min value has to be below max value!");
        }

        let allValues = Array.from({ length: max - min + 1 }, (_, i) => i + min);

        this.cards = new Array(allValues.length);

        while (allValues.length > 0) {
            let currentLength = allValues.length;
            let newNumber = allValues[Math.floor(Math.random() * currentLength)];
            this.cards[currentLength - 1] = newNumber;
            allValues = allValues.filter(function (entry) { return entry !== newNumber });
        }
    }
}