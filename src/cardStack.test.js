describe("CardStack", () => {
    it("Constructor throws if min is above max", () => {
        assert.throws(function () { new CardStack(2, 1) }, RangeError);
    });

    it("Constructor creates set of cards", () => {
        let min = 2;
        let max = 99;
        let cardStack = new CardStack();

        let existingCards = new Set();

        cardStack.cards.forEach(card => {
            existingCards.add(card);
            assertCard(card, min, max)
        });

        assert(cardStack.cards.length === (max - min + 1));
        assert(existingCards.size === (max - min + 1));
    });

    it("Draw cards until exception is thrown", () => {
        
    });
})

function assertCard(value, min, max) {
    assert(value >= min);
    assert(value <= max);
}