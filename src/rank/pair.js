const GC = require('../game-constants');
const RankUtils = require('../rank-utils');
const HighCard = require('./high-card');

class PairRank {
  constructor(playerCards, communityCards) {
    this.playerCards = playerCards;
    this.communityCards = communityCards;
  }

  findPairs() {
    let cards = RankUtils.sortCards(this.playerCards.concat(this.communityCards))
    
    let equalCards = cards.reduce((map, card) => {
        if (!map.has(card.value)) {
            map.set(card.value, [])
        }
        map.get(card.value).push(card);
        return map
    }, new Map)

    let pairs = Array.from(equalCards.entries()).filter(e => e[1].length === 2).map(e => e[0])

    let theRest = Array.from(equalCards.entries()).filter(e => e[1].length !== 2).map(e => e[1][0])

    const highCards = (new HighCard.Rank(theRest, [], (5 - pairs.length * 2))).getHand();

    return new Hand(pairs, highCards);
  }
}

class Hand {
  constructor(pairs, highCards) {
    this.pairs = pairs;
    this.highCards = highCards
  }

  isBetterThan(otherHand) {
    if (this.pairs.length == otherHand.pairs.length && this.pairs.length == 1) {
        if (GC.RANK.indexOf(this.pairs[0]) === GC.RANK.indexOf(otherHand.pairs[0])) {
            return this.highCards.isBetterThan(otherHand.highCards)
        }
        return GC.RANK.indexOf(this.pairs[0]) > GC.RANK.indexOf(otherHand.pairs[0])
    } 
    return this.pairs.length > otherHand.pairs.length
  }
}

module.exports = { PairRank: PairRank, Hand: Hand };
