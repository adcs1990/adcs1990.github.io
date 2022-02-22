import {html, css, LitElement} from 'lit';
import {InputField} from '../components/InputField';
import '../components/MainButton';
import {STRING_VALUES} from '../util/Constants';
import {EVENT_LISTENERS} from '../util/Constants';
import {BuilderPlayer} from '../util/BuilderPlayer';
import { EventFirer } from '../util/EventFirer';


export class HomeView extends LitElement {
  static styles = css`
    .center {
        margin: 0 auto;
        text-align: center;
    }
  `;

  static properties = {
    playerName: {type: String},
    inputElement: {type: Object},
  };

  constructor() {
    super();
    this.playerName = '';
    this.inputElement = new InputField(STRING_VALUES.NAME, true);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(EVENT_LISTENERS.INPUT_EVENT, (e) => {
      this.parseInput(e.detail.data);
    });
  }

  parseInput(text){
    if(!text || !text.match(/^[a-z0-9]+$/i)){
        this.playerName = '';
    } else {
        this.playerName = text;
    }
  }

  startGame(){
    EventFirer.dispatchEvent(this, EVENT_LISTENERS.SET_USER_EVENT, {detail: {data: BuilderPlayer.getPlayer(this.playerName)}});
  }

  render() {
    return html`
        <div class="center">
      <p>${this.inputElement}</p>
        <main-button
          text="${STRING_VALUES.JOIN}"
          .enabled=${this.playerName.trim() !== ''}
          @click="${this.startGame}"
        ></main-button>
        </div>
    `;
  }
}
customElements.define('home-view', HomeView);
