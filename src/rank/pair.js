const Hand = require('../hand');
const CommunityCards = require('../community-cards');
const GC = require('../game-constants');
const RankUtils = require('../rank-utils');

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

    let pairs = Array.from(equalCards.values()).filter(e => e[1].length == 2)

    return pairs 
  }

  isBetterThan(otherRank) {
    var myTopFive = this.findPairs()
    var otherTopFive = otherRank.findPairs()
    console.log("player 1")
    console.log(myTopFive)
    console.log("")
    console.log("player 2")
    console.log(otherTopFive)

    if (myTopFive.length == otherTopFive.length) {
        return true
    } 
    
    return myTopFive.length > otherTopFive.length
  }
}

module.exports = PairRank;
