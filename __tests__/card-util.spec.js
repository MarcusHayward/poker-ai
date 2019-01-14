const CardUtil = require('../src/card-util')
const Card = require('../src/card')

describe('CardUtil', () => {
    it('constructs short card forms to an array of Cards', () => {
        expect(CardUtil.construct('10h', '3c')).toEqual(
            [new Card('10', 'Heart'), new Card('3', 'Club')]
        )
    })
})