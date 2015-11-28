import DigitPattern from '../lib/DigitPattern';
import inputExample from './support/inputExample';

describe('User Story 1:', function () {
  const four = inputExample(`

|_|
  |

`);

  describe('DigitPattern', function () {
    describe('static all', function () {
      it('returns a DigitPattern instance for each of the 10 digits', function () {
        const patterns = DigitPattern.all();

        expect(patterns.size).toBe(10);
      });
    });

    describe('static get', function () {
      it('gets a DigitPattern by its integer value', function () {
        const result = DigitPattern.get(3);

        expect(result.toString()).toEqual('3');
      });
    });

    describe('static search', function () {
      it('searches for a DigitPattern matching digit input', function () {
        const result = DigitPattern.search(four);

        expect(result.is(DigitPattern.get(4))).toBeTruthy();
      });
    });

    describe('is', function () {
      it('compares instances for value equality', function () {
        const two = DigitPattern.get(2);

        const areEqual = two.is(two);

        expect(areEqual).toBeTruthy();
      });

      it('is comparable with DigitImageMap instances', function () {
        const two = DigitPattern.get(2);

        const areEqual = two.is(two.digitImageMap);

        expect(areEqual).toBeTruthy();
      });
    });
  });
});
