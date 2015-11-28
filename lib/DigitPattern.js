import assert from 'assert';
import {Range} from 'immutable';
import DigitImageMap from './DigitImageMap';

const digitPatterns = [
  clean(`
 _
| |
|_|

`),
  clean(`

  |
  |

`),
  clean(`
 _
 _|
|_

`),
  clean(`
 _
 _|
 _|

`),
  clean(`

|_|
  |

`),
  clean(`
 _
|_
 _|

`),
  clean(`
 _
|_
|_|

`),
  clean(`
 _
  |
  |

`),
  clean(`
 _
|_|
|_|

`),
  clean(`
 _
|_|
 _|

`)
];

class DigitPattern {
  static all() {
    return new Range(0, 10).map(d => this.get(d));
  }

  static get(d) {
    return new DigitPattern(d, new DigitImageMap(digitPatterns[d]));
  }

  static search(digitInput) {
    assert.equal(5, digitInput.split('\n').length);
    const input = new DigitImageMap(digitInput);
    const realDigits = this.all();
    return realDigits.find(realDigit => {
      return realDigit.is(input)
    });
  }

  constructor(decimalValue, digitImageMap) {
    this.decimalValue = decimalValue;
    this.digitImageMap = digitImageMap;
    this.digitInput = digitImageMap.digitInput;
  }

  is(other) {
    return this.digitInput === other.digitInput;
  }

  toString() {
    return this.decimalValue.toString();
  }
}

function clean(input) {
  return input.replace(/^\n/, '');
}

export default DigitPattern;
