import {Persistence} from '../../../src/util/Persistence';
import {assert} from '@open-wc/testing';

describe('Persistence.js', () => {
  it('Set and Get from localStorage', async () => {
    const name = 'Joan' + new Date().getMilliseconds();
    const objNull = Persistence.get(name);
    assert.isNull(objNull);
    Persistence.set(name, {name: name, points: 0});
    const objNotNull = Persistence.get(name);
    assert.isNotNull(objNotNull);
  });
});
