import {HomeView} from '../../../src/view/HomeView';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

describe('HomeView.js', () => {
  it('Component is defined', () => {
    const el = document.createElement('home-view');
    assert.instanceOf(el, HomeView);
  });

  it('Default username is empty', async () => {
    const el = await fixture(html`<home-view></home-view>`);
    assert.equal(el.userName, '');
  });

  it('Only userName alphanumeric is allowed', async () => {
    const el = await fixture(html`<home-view></home-view>`);
    el.parseInput({detail: {data: '*Joseph'}});
    assert.equal(el.userName, '');
    el.parseInput({detail: {data: 'Joseph'}});
    assert.equal(el.userName, 'Joseph');
  });

  it('set-user-event Event is called', async () => {
    const el = await fixture(html`<home-view></home-view>`);
    const spy = sinon.spy();
    el.addEventListener('set-user-event', spy);
    el.startGame();
    assert.isTrue(spy.called);
  });
});
