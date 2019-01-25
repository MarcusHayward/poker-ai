const Hand = require('../hand');
const CommunityCards = require('../community-cards');
const GC = require('../game-constants');
const RankUtils = require('../rank-utils');
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
                return {'flushSuit': allCards[i].suit, 'highCardRank': new HighCard(accumulator[allCards[i].suit], 5)}
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

        return myFlush.highCardRank.isBetterThan(theirFlush.highCardRank)
    }
}

module.exports = FlushRank;
