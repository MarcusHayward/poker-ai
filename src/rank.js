const Hand = require('./hand');
const CommunityCards = require('./community-cards');
const GC = require('./game-constants');

class Rank {
  constructor(playerCards, communityCards) {
    this.playerCards = playerCards;
    this.communityCards = communityCards;
  }

  getPlayerTopFive() {
    let cards = this.playerCards.concat(this.communityCards.cards);
    //console.log(cards);
    let sortedCards = cards.sort(function(a, b) {
      return GC.RANK.indexOf(b.value) - GC.RANK.indexOf(a.value);
    });
    console.log();
    //console.log(sortedCards);
    let topFive = sortedCards.slice(0, 5);
    //console.log();
    console.log(topFive);
  }
}

module.exports = Rank;
