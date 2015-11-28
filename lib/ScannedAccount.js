import assert from 'assert';
import {List, Range} from 'immutable';

import DigitImageMap from './DigitImageMap';

class ScannedAccount {
  constructor(inputRow) {
    const inputDigits = splitIntoDigits(inputRow);
    this.digits = inputDigits.map(inputDigit => new DigitImageMap(inputDigit));
  }

  // the account number with any warnings or alternates
  toString() {
    return this.digits.map(digit => digit.toString()).join('');
  }
}

function splitIntoDigits(input) {
  const charWidth = 3;
  const digitCount = 10;
  const lines = splitLines(input);
  const digits = new Range(0, digitCount).map(d => {
    const offset = d * charWidth;
    const lineSegments = lines.map(line => line.slice(offset, offset + charWidth));
    return lineSegments.join('\n') + '\n';
  });
  return digits;
}

function splitLines(input) {
  const lines = new List(input.split('\n'));
  assert.equal(5, lines.size);
  const linesWithoutLastBlank = lines.pop();
  assert.equal(4, linesWithoutLastBlank.size);
  return linesWithoutLastBlank;
}

export default ScannedAccount;
