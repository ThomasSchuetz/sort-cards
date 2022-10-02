describe("SortingPile", () => {
    it("IncreasingOrderStartsBelowMinValue", () => {
        let pile = new SortingPile(1, 10, true);

        assert(pile.currentValue < 1);
    });

    it("DecreasingOrderStartsBelowMinValue", () => {
        let pile = new SortingPile(1, 100, false);

        assert(pile.currentValue > 100);
    });

    // it("Draw cards until exception is thrown", () => {
    //     let min = 1;
    //     let max = 9;
    //     let cardStack = new CardStack(min, max);

    //     for (let i = 0; i <= max - min; i++) {
    //         const card = cardStack.draw();
    //         assertCard(card, min, max);
    //     }

    //     assert.throws(function () { cardStack.draw() }, RangeError);
    // });
})