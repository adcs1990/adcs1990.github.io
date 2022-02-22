import {html, css, LitElement} from 'lit';
import '../components/InputField';
import '../components/MainButton';
import {STRING_VALUES} from '../util/Constants';
import {Builder} from '../util/Builder';
import {EventFirer} from '../util/EventFirer';

export class HomeView extends LitElement {
  static styles = css`
    .center {
      margin: 0 auto;
      text-align: center;
    }
    .custom {
      margin-top: 20px;
    }
  `;

  static get properties() {
    return {
      userName: {type: String},
      inputElement: {type: Object},
    };
  }

  constructor() {
    super();
    this.userName = '';
  }

  parseInput(e) {
    const text = e.detail.data;
    if (!text || !text.match(/^[a-z0-9]+$/i)) {
      this.userName = '';
    } else {
      this.userName = text;
    }
  }

  startGame() {
    EventFirer.dispatchEvent(
      this,
      'set-user-event',
      Builder.createUser(this.userName)
    );
  }

  render() {
    return html`
      <div class="center">
        <input-field
          placeholder="${STRING_VALUES.NAME}"
          ?required="${true}"
          @input-event="${this.parseInput}"
        ></input-field>
        <div class="custom"></div>
        <main-button
          class="custom"
          text="${STRING_VALUES.JOIN}"
          .enabled=${this.userName.trim() !== ''}
          @click="${this.startGame}"
        ></main-button>
      </div>
    `;
  }
}
customElements.define('home-view', HomeView);
