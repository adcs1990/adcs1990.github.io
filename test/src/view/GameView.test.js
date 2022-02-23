import {GameView} from '../../../src/view/GameView';
import {OPTIONS} from '../../../src/util/Constants';
import {User} from '../../../src/model/User';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

describe('GameView.js', () => {
  it('Component is defined', () => {
    const el = document.createElement('game-view');
    assert.instanceOf(el, GameView);
  });

  it('Check properties setted (user, userOptionSelected, machineOptionSelected, result)', async () => {
    const user = new User('Joan', 0);
    const option = OPTIONS[0];
    const el = await fixture(html`<game-view .user="${user}"></game-view>`);
    await el.play(option);
    assert.equal(el.userOptionSelected, option);
    assert.isNotNull(el.machineOptionSelected);
    assert.isNotNull(el.result);
    assert.equal(user.lastOptionSelected, option);
  });

  it('Show Loader correctly in css', async () => {
    const user = new User('Joan', 0);
    const el = await fixture(html`<game-view .user="${user}"></game-view>`);
    el.setVisibleLoader(true);
    assert.equal(el.shadowRoot.getElementById('loader').style.display, 'block');
  });

  it('Hide Loader correctly in css', async () => {
    const user = new User('Joan', 0);
    const el = await fixture(html`<game-view .user="${user}"></game-view>`);
    el.setVisibleLoader(false);
    assert.equal(el.shadowRoot.getElementById('loader').style.display, 'none');
  });

  it('exit-event Event is called', async () => {
    const user = new User('Joan', 0);
    const el = await fixture(html`<game-view .user="${user}"></game-view>`);
    const spy = sinon.spy();
    el.addEventListener('exit-event', spy);
    el.exit();
    assert.isTrue(spy.called);
  });

});
