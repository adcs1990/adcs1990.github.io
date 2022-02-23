import {html, css, LitElement} from 'lit';
import './HomeView';
import './GameView';

export class EnvironmentView extends LitElement {
  static styles = css`
    .container {
      min-width: 500px;
    }
  `;

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
      <div class="container">
        ${!this.user
          ? html`<home-view @set-user-event=${this.setUser}></home-view>`
          : html`<game-view
              .user="${this.user}"
              @exit-event="${this.setUser}"
            ></game-view>`}
      </div>
    `;
  }
}
customElements.define('environment-view', EnvironmentView);
