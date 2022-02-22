import {html, css, LitElement} from 'lit';
import './HomeView';
import './GameView';
import {EVENT_LISTENERS} from '../util/Constants';

export class EnvironmentView extends LitElement {

  static get properties(){
    return {
      player: {type: Object}
    };
  }

  connectedCallback(){
    super.connectedCallback();
    this.addEventListener(EVENT_LISTENERS.SET_USER_EVENT, (e) => {
      this.player = e.detail.data;
    });
  }

  render() {
    return html`
      ${this.player == null
      ? html`<home-view></home-view>`
      : html`<game-view .player="${this.player}"></game-view>`
      }
    `;
  }
}
customElements.define('environment-view', EnvironmentView);
