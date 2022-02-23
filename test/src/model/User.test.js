import {User} from '../../../src/model/User';
import {Persistence} from '../../../src/util/Persistence';
import {assert} from '@open-wc/testing';

describe('User.js', () => {
  it('User save state in localStorage', async () => {
    const name = 'Joan_1234';
    const points = 4;
    const user = new User(name, points);
    user.save();
    assert.equal(Persistence.get(name).points, points);
    user.increasePoint();
    assert.equal(user.points, 5);
  });

  it('Increase points adds 1 point each time', async () => {
    const name = 'Joan_1234';
    const points = 4;
    const user = new User(name, points);
    user.increasePoint();
    assert.equal(user.points, 5);
  });
});
