describe("Game", () => {
    it("Starting draws from stack until player has enough cards", () => {
        let player = new Player();
        let cardStack = new CardStack(1, 20);
        let piles = {};
        let numberCards = 5;

        let game = new Game(player, cardStack, piles, numberCards);
        game.start();

        assert(player.getNumberOfCards() == numberCards);
        assert(cardStack.size() == 20 - numberCards);
    });

    it("Draw card after playing one if stack is not empty", () => {
        let player = new Player();
        let cardStack = new CardStack(1, 20);
        let piles = {1: new SortingPile(1, 20)};
        let numberCards = 5;

        let game = new Game(player, cardStack, piles, numberCards);
        game.start();

        game.playCard(player.getAllCards()[0], 1);

        assert(player.getNumberOfCards() == numberCards);
        assert(cardStack.size() == 20 - numberCards - 1);
    });

    it("Do not draw card after playing one if stack is empty", () => {
        let player = new Player();
        let cardStack = new CardStack(1, 5);
        let piles = {1: new SortingPile(1, 5)};
        let numberCards = 5;

        let game = new Game(player, cardStack, piles, numberCards);
        game.start();

        game.playCard(player.getAllCards()[0], 1);

        assert(player.getNumberOfCards() == 4);
        assert(cardStack.size() == 0);
    });

    it("Initial pile status", () => {
        let player = new Player();
        let cardStack = new CardStack(1, 5);
        let piles = {
            1: new SortingPile(1, 5, true),
            2: new SortingPile(1, 5, false)
        };
        let numberCards = 5;

        let game = new Game(player, cardStack, piles, numberCards);
        game.start();

        let pileStatus = game.getPilesStatus();

        assertPile(pileStatus[1], {"isIncreasing": true, "value": 0});
        assertPile(pileStatus[2], {"isIncreasing": false, "value": 6});
    });

    it("Pile status after playing cards on each pile", () => {
        let player = new Player();
        let cardStack = new CardStack(1, 5);
        let piles = {
            1: new SortingPile(1, 5, true),
            2: new SortingPile(1, 5, false)
        };
        let numberCards = 5;

        let game = new Game(player, cardStack, piles, numberCards);
        game.start();

        let firstCard = player.getAllCards()[0];
        game.playCard(firstCard, 1);

        let secondCard = player.getAllCards()[0];
        game.playCard(secondCard, 2);

        let pileStatus = game.getPilesStatus();

        assertPile(pileStatus[1], {"isIncreasing": true, "value": firstCard});
        assertPile(pileStatus[2], {"isIncreasing": false, "value": secondCard});
    });
});

function assertPile(obtained, expected) {
    assert(obtained.length == expected.length);
    for (const key in obtained) {
        assert(obtained[key] == expected[key]);
    }
}