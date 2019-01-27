const CommunityCards = require('../community-cards');
const GC = require('../game-constants');
const RankUtils = require('../rank-utils');

class Rank {
  constructor(playerCards, communityCards, maxNumberOfCardsToConsider = 5) {
    this.playerCards = playerCards;
    this.communityCards = communityCards;
    this.maxNumberOfCardsToConsider = maxNumberOfCardsToConsider;
  }

  getHand() {
    let cards = this.playerCards.concat(this.communityCards);
    return new Hand(RankUtils.sortCards(cards).slice(0, this.maxNumberOfCardsToConsider));
  }
}

class Hand {
  constructor(orderedCards) {
    this.orderedCards = orderedCards;
  }

  isBetterThan(otherHand) {
    for (var i = 0; i < this.orderedCards.length; i++) {
      if (GC.RANK.indexOf(this.orderedCards[i].value) == GC.RANK.indexOf(otherHand.orderedCards[i].value)) {
        continue
      }
      return GC.RANK.indexOf(this.orderedCards[i].value) > GC.RANK.indexOf(otherHand.orderedCards[i].value)
    }

    //draw - fix me
    return true
  }
}



module.exports = {Rank: Rank, Hand: Hand};
