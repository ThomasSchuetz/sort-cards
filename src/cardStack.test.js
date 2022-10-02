describe("CardStack", () => {
    it("Constructor throws if min is above max", () => {
        assert.throws(function() { new CardStack(2, 1) }, RangeError);
    });

    // it("Throwing dice results in 5 dice, each between 1 and 6", () => {
    //     var turn = new Turn();
    //     turn.throwTheDice([]);
    //     var dice = turn.showDice();

    //     assert.equal(5, dice.length);
    //     dice.forEach(d => {
    //         assert(d >= 1);
    //         assert(d <= 6);
    //     });      
    // });
})