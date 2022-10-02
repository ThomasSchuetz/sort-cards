class Player {
    constructor() {
        this.cards = [];
    }

    getNumberOfCards() {
        return this.cards.length;
    }

    getAllCards() {
        let copiedCards = new Array(...this.cards);
        copiedCards.sort((a, b) => Number(a) - Number(b));
        return copiedCards;
    }

    playCard(card) {
        if (!this.cards.includes(card)) {
            throw new RangeError("Player does not hold this card!");
        }

        this.cards = this.cards.filter(
            function (entry) { return entry !== card }
        );
    }

    drawCard(card) {
        this.cards.push(card);
    }
}