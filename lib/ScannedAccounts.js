import ScannedAccount from './ScannedAccount';

class ScannedAccounts {
  constructor(input) {
    const inputRows = splitIntoRows(4, input);
    console.log('input:\n', input, 'rows:\n', inputRows);
    this.accounts = inputRows.map(row => new ScannedAccount(row));
  }

  accountNumbers() {
    return this.accounts.map(account => account.toString());
  }

  toString() {
    return this.accountNumbers().join('\n');
  }
}

function splitIntoRows(rowHeight, input) {
  input = input || '';
  const n = parseInt(rowHeight);
  const rowMatcher = new RegExp(`(.*\n){${n}}`, 'g');
  return input.match(rowMatcher) || [];
}

export default ScannedAccounts;
