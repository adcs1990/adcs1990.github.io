import {html, css, LitElement} from 'lit';
import {InputField} from '../components/InputField';
import '../components/MainButton';
import {STRING_VALUES} from '../util/Constants';
import {EVENT_LISTENERS} from '../util/Constants';

export class GameView extends LitElement {
  static styles = css`
    
  `;

  static properties = {
    playerName: {type: String},
    inputE: {type: Object},
  };

  constructor() {
    super();
    this.playerName = '';
    this.inputE = new InputField(STRING_VALUES.NAME, true);
  }

  render() {
    return html`
        <p>Vista de Juego</p>
    `;
  }
}
customElements.define('game-view', GameView);
