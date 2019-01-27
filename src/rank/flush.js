const HighCard = require('./high-card');

class FlushRank {
    constructor(playerCards, communityCards) {
        this.playerCards = playerCards;
        this.communityCards = communityCards;
    }

    getFlushStructure() {
        const allCards = this.playerCards.concat(this.communityCards)

        let accumulator = {};

        for (var i = 0; i < allCards.length; i++) {
            if (!accumulator.hasOwnProperty(allCards[i].suit)) {
                accumulator[allCards[i].suit] = [];
            }

            accumulator[allCards[i].suit].push(allCards[i]);

            if (accumulator[allCards[i].suit].length == 5) {
                return {'flushSuit': allCards[i].suit, 'highCards': (new HighCard.Rank(accumulator[allCards[i].suit], 5)).getHand()}
            }
        }

        return {'flushSuit': null};
    }

    isBetterThan(otherRank) {

        const myFlush = this.getFlushStructure()
        const theirFlush = otherRank.getFlushStructure()

        if (!myFlush.flushSuit) {
            return false
        }

        if (!theirFlush.flushSuit) {
            return true
        }

        return myFlush.highCards.isBetterThan(theirFlush.highCards)
    }
}

module.exports = FlushRank;
