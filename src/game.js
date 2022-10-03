class Game {
    minimumNumberPlayedCardsThisMove = 2;

    constructor(player, cardStack, piles, numberCards) {
        this.player = player;
        this.cardStack = cardStack;
        this.piles = piles;
        this.numberCards = numberCards;

        this.cardsPlayedThisMove = 0;
    }

    start() {
        this.drawCards();
    }

    getPlayerCards() {
        return this.player.getAllCards();
    }

    getPilesStatus() {
        let result = {};
        for (const pileIndex in this.piles) {
            const pile = this.piles[pileIndex];

            result[pileIndex] = {
                "isIncreasing": pile.isIncreasing,
                "value": pile.currentValue
            };
        }
        return result;
    }

    playCard(card, pileIndex) {
        this.piles[pileIndex].put(card);
        this.player.playCard(card);
        this.cardsPlayedThisMove++;
    }

    numberRemainingCards() {
        return this.cardStack.size();
    }

    drawCards() {
        if ((this.cardsPlayedThisMove > 0) && (this.cardsPlayedThisMove < this.minimumNumberPlayedCardsThisMove)) {
            throw new Error();
        }
        
        while (
            (this.cardStack.size() > 0) && 
            (this.player.getNumberOfCards() < this.numberCards)) {

            this.player.drawCard(this.cardStack.draw());
        }
        this.cardsPlayedThisMove = 0;
    }
}