import {html, LitElement} from 'lit';
import './HomeView';
import './GameView';

export class EnvironmentView extends LitElement {
  static get properties() {
    return {
      user: {type: Object},
    };
  }

  setUser(e) {
    this.user = e.detail.data;
  }

  render() {
    return html`
      ${this.user == null
        ? html`<home-view @set-user-event=${this.setUser}></home-view>`
        : html`<game-view .user="${this.user}"></game-view>`}
    `;
  }
}
customElements.define('environment-view', EnvironmentView);
