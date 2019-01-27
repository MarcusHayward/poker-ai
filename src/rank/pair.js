const Hand = require('../hand');
const CommunityCards = require('../community-cards');
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

    return { 'pairs': pairs, 'highCards': (new HighCard.Rank(theRest, [], (5 - pairs.length * 2))).getHand() }
  }

  isBetterThan(otherRank) {
    var myRankData = this.findPairs()
    var otherRankData = otherRank.findPairs()

    if (myRankData.pairs.length == otherRankData.pairs.length && myRankData.pairs.length == 1) {
        if (GC.RANK.indexOf(myRankData.pairs[0]) === GC.RANK.indexOf(otherRankData.pairs[0])) {
            return myRankData.highCards.isBetterThan(otherRankData.highCards)
        }

        return GC.RANK.indexOf(myRankData.pairs[0]) > GC.RANK.indexOf(otherRankData.pairs[0])
    } 
    
    return myRankData.pairs.length > otherRankData.pairs.length
  }
}

module.exports = PairRank;
