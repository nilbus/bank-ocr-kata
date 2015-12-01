import DigitImageMap from '../lib/DigitImageMap';
import inputExample from './support/inputExample';

describe('User Story 1:', function () {
  const exampleDigit = inputExample(`

  |
  |

`);
  const duplicateDigit = inputExample(`

  |
  |

`);
  const exampleGarbage = inputExample(`
 _
|_
|_

`);

  describe('DigitImageMap', function () {

    describe('toString', function () {
      it('reutrns the matching numeral character', function () {
        const searchDigitPatterns = () => 1;
        const digitImageMap = new DigitImageMap(exampleDigit, searchDigitPatterns);

        const result = digitImageMap.toString();

        expect(result).toEqual('1');
      });

      it('reutrns "?" if no digit matches', function () {
        const digitImageMap = new DigitImageMap(exampleGarbage);

        const result = digitImageMap.toString();

        expect(result).toEqual('?');
      });
    });

    describe('is', function () {
      it('compares instances for value equality', function () {
        const example   = new DigitImageMap(exampleDigit);
        const duplicate = new DigitImageMap(duplicateDigit);

        const areEqual = example.is(duplicate);

        expect(areEqual).toBeTruthy();
      });

      it('is comparable with DigitPattern instances', function () {
        const two = DigitPattern.get(2);

        const areEqual = two.digitImageMap.is(two);

        expect(areEqual).toBeTruthy();
      });
    });
  });
});
