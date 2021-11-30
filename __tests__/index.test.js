const { wishMerryChristmas } = require('../index');

describe('#wishMerryChristmas', () => {
  it('wishes a person a merry Christmas', () => {
    const actual = wishMerryChristmas('August');
    const expected = 'Merry Christmas August!';
    expect(actual).toEqual(expected);
  });
});
