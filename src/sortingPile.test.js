describe("SortingPile", () => {
    it("Increasing order starts below min value", () => {
        let pile = new SortingPile(1, 10, true);

        assert(pile.currentValue < 1);
    });
    
    it("Increasing order regular card", () => {
        let pile = new SortingPile(1, 100, true);

        pile.put(50);

        assert(pile.currentValue == 50);
    });

    it("Increasing order improvement card", () => {
        let pile = new SortingPile(1, 100, true);
        
        pile.put(17);
        pile.put(7);

        assert(pile.currentValue == 7);
    });

    it("Increasing order non-improvement card throws", () => {
        let pile = new SortingPile(1, 100, true);

        pile.put(80);
        
        assert.throws(function () { pile.put(79) }, RangeError);
    });

    it("Decreasing order starts above max value", () => {
        let pile = new SortingPile(1, 100, false);

        assert(pile.currentValue > 100);
    });
    
    it("Decreasing order regular card", () => {
        let pile = new SortingPile(1, 100, false);

        pile.put(50);

        assert(pile.currentValue == 50);
    });

    it("Decreasing order improvement card", () => {
        let pile = new SortingPile(1, 100, false);
        
        pile.put(17);
        pile.put(27);

        assert(pile.currentValue == 27);
    });

    it("Decreasing order non-improvement card throws", () => {
        let pile = new SortingPile(1, 100, false);

        pile.put(80);
        
        assert.throws(function () { pile.put(81) }, RangeError);
    });

    it("Card above limit throws", () => {
        let pile = new SortingPile(1, 100, true);

        assert.throws(function () { pile.put(101) }, RangeError);
    });

    it("Card below limit throws", () => {
        let pile = new SortingPile(1, 100, true);

        assert.throws(function () { pile.put(0) }, RangeError);
    });
})