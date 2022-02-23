import {BasePlayer} from '../../../../src/model/base/BasePlayer';
import {OPTIONS} from '../../../../src/util/Constants';

describe('BasePlayer.js', () => {
  it('Correctly set the option selected', async () => {
    const basePlayer = new BasePlayer('Example');
    basePlayer.setOptionSelected(OPTIONS[2]);
    assert.equal(basePlayer.lastOptionSelected, OPTIONS[2]);
  });

});
