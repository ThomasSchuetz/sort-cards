class Player {
    constructor() {
        this.cards = [];
    }

    getNumberOfCards() {
        return this.cards.length;
    }

    getAllCards() {
        let copiedCards = [...this.cards];
        if (this.getNumberOfCards() > 1) {
            copiedCards.sort((a, b) => Number(a) - Number(b));
        }
        return copiedCards;
    }

    playCard(card) {
        if (!this.cards.includes(card)) {
            throw new RangeError("Player does not hold this card!");
        }

        let cardIndex = this.cards.indexOf(card);
        this.cards.splice(cardIndex, 1);
    }

    drawCard(card) {
        this.cards.push(card);
    }
}