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
        const digitImageMap = new DigitImageMap(exampleDigit);
        expect(digitImageMap.toString()).toEqual('1');
      });

      it('reutrns "?" if no digit matches', function () {
        const digitImageMap = new DigitImageMap(exampleGarbage);
        expect(digitImageMap.toString()).toEqual('?');
      });
    });

    describe('is', function () {
      it('compares instances for value equality', function () {
        const example   = new DigitImageMap(exampleDigit);
        const duplicate = new DigitImageMap(duplicateDigit);
        expect(example.is(duplicate)).toBeTruthy();
      });
    });
  });
});
