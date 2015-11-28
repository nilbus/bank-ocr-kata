import ScannedAccount from '../lib/ScannedAccount';
import inputExample from './support/inputExample';

describe('User Story 1:', function () {
  const validAccount = inputExample(`
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

`);

  describe('ScannedAccount', function () {
    describe('toString', function () {
      it('reutrns a string representing the account number', function () {
        const scannedAccount = new ScannedAccount(validAccount);

        const result = scannedAccount.toString();

        expect(result).toEqual('123456789');
      });
    });
  });
});
