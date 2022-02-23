import {EnvironmentView} from '../../../src/view/EnvironmentView';
import {User} from '../../../src/model/User';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

describe('EnvironmentView.js', () => {
  it('Component is defined', () => {
    const el = document.createElement('environment-view');
    assert.instanceOf(el, EnvironmentView);
  });

  it('Component render with correct child based in the set of user', async () => {
    const el = await fixture(html`<environment-view></environment-view>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
        <home-view>
        </home-view>
      </div>
    `
    );
    const user = new User('Joan', 0);
    el.setUser({detail: {data: user}});

    const elWithUser = await fixture(html`<environment-view .user="${user}"></environment-view>`);
    assert.shadowDom.equal(
        elWithUser,
        `
        <div class="container">
          <game-view>
          </game-view>
        </div>
      `
      );
    
  });
});