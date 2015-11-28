import assert from 'assert';
import DigitPattern from './DigitPattern';

class DigitImageMap {
  constructor(digitInput) {
    assert.equal(5, digitInput.split('\n').length);
    this.digitInput = digitInput;
  }

  toString() {
    return this.char || (this.char = parse(this.digitInput));
  }

  is(other) {
    return this.digitInput === other.digitInput;
  }
}

function parse(digitInput) {
  const realDigit = DigitPattern.search(digitInput);
  return (realDigit || '?').toString();
}

export default DigitImageMap;
