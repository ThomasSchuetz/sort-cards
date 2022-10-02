
class CardStack {
    constructor(min = 2, max = 99) {
        if (min > max) {
            throw new RangeError("Min value has to be below max value!");
        }   

        allValues = Array.from({ length: max - min + 1 }, (_, i) => i + min);

        this.cards = new Array(allValues.length());
        
        while (allValues.length() > 0) {
            let currentLength = allValues.length();
            this.cards[currentLength-1] = allValues[Math.floor(Math.random() * currentLength)];
        }
    }
}