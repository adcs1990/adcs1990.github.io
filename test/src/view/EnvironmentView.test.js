import {EnvironmentView} from '../../../src/view/EnvironmentView';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

describe('EnvironmentView.js', () => {
  it('Component is defined', () => {
    const el = document.createElement('environment-view');
    assert.instanceOf(el, EnvironmentView);
  });

  it('Component render home-view with user unsetted', async () => {
    const el = await fixture(html`<environment-view></environment-view>`);
    assert.isTrue(el.shadowRoot.innerHTML.includes('<home-view>'));
  });

  it('Component render game-view with user setted', async () => {
    const user = {name: 'Joan', points: 0};
    const el = await fixture(html`<environment-view .user="${user}"></environment-view>`);
    assert.isTrue(el.shadowRoot.innerHTML.includes('<game-view>'));
  });
});