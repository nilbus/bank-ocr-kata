import assert from 'assert';

class DigitImageMap {
  constructor(digitInput, searchDigitPatterns) {
    assert.equal(5, digitInput.split('\n').length);
    this.searchDigitPatterns = searchDigitPatterns;
    this.digitInput = digitInput;
  }

  toString() {
    return this.char || (this.char = parse(this.digitInput, this.searchDigitPatterns));
  }

  is(other) {
    return this.digitInput === other.digitInput;
  }
}

function parse(digitInput, searchDigitPatterns) {
  const realDigit = searchDigitPatterns(digitInput);
  return (realDigit || '?').toString();
}

export default DigitImageMap;
