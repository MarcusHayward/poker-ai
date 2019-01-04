const PairRank = require('../src/rank/pair');
const Card = require('../src/card');
const Hand = require('../src/hand');

class TestFramework {
    constructor() {
        this.tests = {
            'it_matches_pairs_and_the_highest_card_wins': function() {
                const player1Cards = [new Card('5', 'Heart'), new Card('10', 'Diamond')];
                const player2Cards = [new Card('5', 'Diamond'), new Card('2', 'Heart')];
                const communityCards = [
                    new Card('3', 'Spade'),
                    new Card('7', 'Spade'),
                    new Card('6', 'Spade'),
                    new Card('9', 'Spade'),
                    new Card('5', 'Club'),
                ];

                let playerOneRank = new PairRank(player1Cards, communityCards);
                let playerTwoRank = new PairRank(player2Cards, communityCards);

                return playerOneRank.isBetterThan(playerTwoRank);
            },
            'it_matches_pairs_and_the_highest_cards_are_equal': function() { // todo: fix this
                const player1Cards = [new Card('5', 'Heart'), new Card('2', 'Diamond')];
                const player2Cards = [new Card('5', 'Diamond'), new Card('3', 'Heart')];
                const communityCards = [
                    new Card('K', 'Spade'),
                    new Card('7', 'Spade'),
                    new Card('6', 'Spade'),
                    new Card('9', 'Spade'),
                    new Card('5', 'Club'),
                ];

                let playerOneRank = new PairRank(player1Cards, communityCards);
                let playerTwoRank = new PairRank(player2Cards, communityCards);

                return playerOneRank.isBetterThan(playerTwoRank);
            }
        }
    }

    run() {
        const tests = this.tests

        Object.keys(tests).forEach(function(testName, testFunction) {
            if (tests[testName]()) {
                console.log("PASS: " + testName)
            } else {
                console.log("FAIL: " + testName)
            }
        });
    }
}

const tests = new TestFramework()
tests.run()