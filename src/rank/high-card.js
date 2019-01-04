const Hand = require('../hand');
const CommunityCards = require('../community-cards');
const GC = require('../game-constants');
const RankUtils = require('../rank-utils');

class HighCardRank {
  constructor(playerCards, communityCards) {
    this.playerCards = playerCards;
    this.communityCards = communityCards;
  }

  getPlayerTopFive() {
    let cards = this.playerCards.concat(this.communityCards);
    return RankUtils.sortCards(cards).slice(0, 5);
  }

  isBetterThan(otherRank) {
    var myTopFive = this.getPlayerTopFive()
    var otherTopFive = otherRank.getPlayerTopFive()

    for (var i = 0; i < myTopFive.length; i++) {
      if (GC.RANK.indexOf(myTopFive[i].value) == GC.RANK.indexOf(otherTopFive[i].value)) {
        continue
      }
      return GC.RANK.indexOf(myTopFive[i].value) > GC.RANK.indexOf(otherTopFive[i].value)
    }
  }
}

module.exports = HighCardRank;
