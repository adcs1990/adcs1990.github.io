import {Persistence} from '../../../src/util/Persistence';
import {assert} from '@open-wc/testing';

describe('Persistence.js', () => {
  it('Get from localStorage with a non existent user', async () => {
    const name = 'Joan' + new Date().getMilliseconds();
    const objNull = Persistence.get(name);
    assert.isNull(objNull);
  });

  it('Get from localStorage with existent user', async () => {
    const name = 'Joan' + new Date().getMilliseconds();
    Persistence.set(name, {name: name, points: 0});
    const objNotNull = Persistence.get(name);
    assert.isNotNull(objNotNull);
    assert.deepEqual(objNotNull, {name: name, points: 0});
  });
});
