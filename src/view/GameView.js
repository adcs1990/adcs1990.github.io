import {html, css, LitElement} from 'lit';
import '../components/MainButton';
import {STRING_VALUES} from '../util/Constants';
import {EVENT_LISTENERS} from '../util/Constants';
import { Persistence } from '../util/Persistence';
import { Player } from '../model/Player';

export class GameView extends LitElement {
  static styles = css`
    
  `;

  static get properties () {
    player: {type: Object}
  }

  addPoint(){
    this.player.increasePoint();
    Persistence.set(this.player.name, this.player);
  }

  render() {
    return html`
        <p>Playing: ${this.player.name} | Points: ${this.player.points}</p>
        <p><button @click="${this.addPoint}">Add</button></p>
    `;
  }
}
customElements.define('game-view', GameView);
