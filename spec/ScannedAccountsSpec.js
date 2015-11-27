import ScannedAccounts from '../lib/ScannedAccounts.js';

describe('User Story 1:', function () {
  let twoValidAccounts = `
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|


  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

`;

  describe('ScannedAccounts', function () {
    describe('accountNumbers', function () {
      it('reutrns an array of account numbers corresponding to scan data', function () {
        let scannedAccounts = new ScannedAccounts();
        expect(scannedAccounts.accountNumbers()).toEqual(['123456789', '111111111']);
      });
    });
  });
});
