const Hand = require('./hand');

class Dealer {
    constructor(deck, playerOne, playerTwo) {
        this.deck = deck;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    deal() {
        this.playerOne.addhand(new Hand(this.deck.getNextCard(), this.deck.getNextCard()))
        this.playerTwo.addhand(new Hand(this.deck.getNextCard(), this.deck.getNextCard()))
    }
}

module.exports = Dealer