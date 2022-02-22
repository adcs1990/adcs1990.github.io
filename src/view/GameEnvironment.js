import {html, css, LitElement} from 'lit';
import './HomeView';
import './GameView';
import {Router} from '@vaadin/router';

export class GameEnvironment extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  constructor() {
    super();
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes([
      {path: '/', component: 'home-view'},
      {path: '/game', component: 'game-view'},
      {path: '(.*)', component: 'home-view'},
    ]);
  }

  render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}
customElements.define('game-environment', GameEnvironment);
