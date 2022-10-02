class Player {
    constructor() {
        this.cards = [];
    }

    getNumberOfCards() {
        return this.cards.length;
    }

    getAllCards() {
        return new Array(...this.cards);
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