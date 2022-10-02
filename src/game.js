class Game {
    constructor(player, cardStack, piles, numberCards) {
        this.player = player;
        this.cardStack = cardStack;
        this.piles = piles;
        this.numberCards = numberCards;
    }

    start() {
        while (
            (this.cardStack.size() > 0) && 
            (this.player.getNumberOfCards() < this.numberCards)) {

            this.player.drawCard(this.cardStack.draw());
        }
    }

    getPlayerCards() {
        return this.player.getPlayerCards();
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
        
        if (this.cardStack.size() > 0) {
            this.player.drawCard(this.cardStack.draw());
        }
    }
}