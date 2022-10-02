describe("Player", () => {
    it("Constructor creates empty list of cards", () => {
        let player = new Player();
        assert(player.getNumberOfCards() == 0);
    });

    it("DrawCard adds given card to player's cards", () => {
        let player = new Player();
        player.drawCard(12);
        assert(player.getNumberOfCards() == 1);
    });

    it("GetAllCards shows all cards held by the player", () => {
        let player = new Player();
        
        player.drawCard(12);
        player.drawCard(57);
        player.drawCard(34);
        
        let cards = player.getAllCards();

        assert(cards.length == 3);
        assert(cards.includes(12));
        assert(cards.includes(57));
        assert(cards.includes(34));
    });

    it("PlayCards removes the card from a player", () => {
        let player = new Player();
        
        player.drawCard(22);
        player.drawCard(43);
        player.drawCard(98);
        
        player.playCard(43);

        let cards = player.getAllCards();

        assert(cards.length == 2);
        assert(cards.includes(22));
        assert(cards.includes(98));
    });

    it("PlayCards throws if card is not held by player", () => {
        let player = new Player();
        
        player.drawCard(22);
        
        assert.throws(function () { player.playCard(43) }, RangeError);
    });
})