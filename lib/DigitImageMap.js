import DigitPattern from './DigitPattern';

class DigitImageMap {
  constructor(digitInput) {
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
