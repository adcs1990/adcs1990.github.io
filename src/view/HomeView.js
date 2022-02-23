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

    .spacer {
      margin-top: 20px;
    }
    h3 {
      color: #ffffff;
      font-family: 'Roboto', sans-serif;
    }

    img {
      margin-top: 30px;
      max-width: 200px;
    }

    .bar {
      background-color: #ffffff;
      min-height: 60px;
      text-align: left;
      padding-top: 15px;
      padding-left: 15px;
      font-family: 'Roboto', sans-serif;
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
      <div class="bar"><h4>${STRING_VALUES.GAME_NAME}</h4></div>
        <img alt="${STRING_VALUES.GAME_NAME}" src="../../assets/rock-paper-scissors.png"/>
        <h3>${STRING_VALUES.NEW_USER}</h3>
        <input-field
          placeholder="${STRING_VALUES.NAME}"
          ?required="${true}"
          @input-event="${this.parseInput}"
        ></input-field>
        <div class="spacer"></div>
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
