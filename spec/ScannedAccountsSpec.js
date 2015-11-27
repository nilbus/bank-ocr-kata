import ScannedAccounts from '../lib/ScannedAccounts';
import inputExample from './support/inputExample';

describe('User Story 1:', function () {
  const twoValidAccounts = inputExample(`
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|


  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

`);

  describe('ScannedAccounts', function () {
    describe('accountNumbers', function () {
      it('reutrns an array of account numbers corresponding to scan data', function () {
        const scannedAccounts = new ScannedAccounts(twoValidAccounts);
        expect(scannedAccounts.accountNumbers()).toEqual(['123456789', '111111111']);
      });
    });
  });
});
