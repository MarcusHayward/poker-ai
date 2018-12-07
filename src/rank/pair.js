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
    let cards = this.playerCards.concat(this.communityCards);
    
    let equalCards = RankUtils.sortCards(cards).reduce((ac, card) => {
        ac[card.value] = ac.hasOwnProperty(card.value) ? ac[card.value].concat([card]) : [card]
        return ac
    }, {})

    let pairs = Object.entries(equalCards).filter(e => {
        return e[1].length == 2
    }).map( e => e[1])

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
