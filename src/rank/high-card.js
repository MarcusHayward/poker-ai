const Hand = require('../hand');
const CommunityCards = require('../community-cards');
const GC = require('../game-constants');
const RankUtils = require('../rank-utils');

class HighCardRank {
  constructor(playerCards, communityCards, maxNumberOfCardsToConsider) {
    this.playerCards = playerCards;
    this.communityCards = communityCards;
    this.maxNumberOfCardsToConsider = maxNumberOfCardsToConsider;
  }

  highCards() {
    let cards = this.playerCards.concat(this.communityCards);
    return RankUtils.sortCards(cards).slice(0, this.maxNumberOfCardsToConsider);
  }

  isBetterThan(otherRank) {
    var myHighCards = this.highCards()
    var otherHighCards = otherRank.highCards()

    for (var i = 0; i < myHighCards.length; i++) {
      if (GC.RANK.indexOf(myHighCards[i].value) == GC.RANK.indexOf(otherHighCards[i].value)) {
        continue
      }
      return GC.RANK.indexOf(myHighCards[i].value) > GC.RANK.indexOf(otherHighCards[i].value)
    }

    //draw - fix me
    return true
  }
}

module.exports = HighCardRank;
