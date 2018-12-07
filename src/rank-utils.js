const GC = require('./game-constants');

module.exports = {}
module.exports.sortCards = function (cards) {
    return cards.sort(function(a, b) {
        return GC.RANK.indexOf(b.value) - GC.RANK.indexOf(a.value);
    });
}