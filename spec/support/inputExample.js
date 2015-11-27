import assert from 'assert'

function inputExample(input) {
  let example = withoutLeadingNewline(input);
  assertLineMultiple(4, example);
  return example;
}

function assertLineMultiple(linePerGroup, input) {
  assert.equal(input.match(/\n/g).length % linePerGroup, 0);
}

function withoutLeadingNewline(input) {
  return input.replace(/^\n/, '');
}

export default inputExample;
