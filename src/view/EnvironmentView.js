import {html, LitElement} from 'lit';
import './HomeView';
import './GameView';

export class EnvironmentView extends LitElement {
  static get properties() {
    return {
      player: {type: Object},
    };
  }

  setUser(e) {
    this.player = e.detail.data;
  }

  render() {
    return html`
      ${this.player == null
        ? html`<home-view @set-user-event=${this.setUser}></home-view>`
        : html`<game-view .player="${this.player}"></game-view>`}
    `;
  }
}
customElements.define('environment-view', EnvironmentView);
