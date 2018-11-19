const GC = require('./game-constants');
const Card = require('./card');

class Deck {
    constructor() {
        this.cards = [];
        for (let i = 0; i < GC.SUIT.length; i++) {
            for (let j = 0; j < GC.RANK.length; j++) {
                this.cards.push(new Card(GC.RANK[j], GC.SUIT[i]))
            }
        }

        this.shuffle()
    }

    shuffle() {

        for (let i = 0; i < this.cards.length; i++) {
            let randomCardPosition = Math.floor(Math.random() * 51);

            let tempCard = this.cards[i];
            this.cards[i] = this.cards[randomCardPosition];
            this.cards[randomCardPosition] = tempCard
        }
    }

    getNextCard() {
        return this.cards.pop()
    }
}

module.exports = Deck