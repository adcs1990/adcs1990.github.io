import {html, css, LitElement} from 'lit';
import '../components/MainButton';
import {Persistence} from '../util/Persistence';
import {OPTIONS} from '../util/Constants';
import {ROCK} from '../util/Constants';
import {PAPPER} from '../util/Constants';
import {SCISSORS} from '../util/Constants';
import {STRING_VALUES} from '../util/Constants';
import {MACHINE_TIMEOUT} from '../util/Constants';

export class GameView extends LitElement {
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
      player: {type: Object},
      playerOptionSelected: {type: Object},
      machineOptionSelected: {type: Object},
      result: {type: String},
    };
  }

  addPoint() {
    this.player.increasePoint();
    Persistence.set(this.player.name, this.player);
    this.requestUpdate();
  }

  play(option) {
    this.result = null;
    this.machineOptionSelected = null;
    this.playerOptionSelected = option;
    setTimeout(() => {
      this.setRandomValue();
    }, MACHINE_TIMEOUT);
  }

  setRandomValue() {
    const randomOption = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    this.machineOptionSelected = randomOption;
    this.manageResults();
  }

  manageResults() {
    if (this.machineOptionSelected === this.playerOptionSelected) {
      this.result = STRING_VALUES.RESULT_TIE;
    } else if (this.machineOptionSelected.enemy.includes(this.playerOptionSelected.name)) {
      this.result = this.player.name + ' ' + STRING_VALUES.WON;
      this.addPoint();
    } else {
      this.result = STRING_VALUES.MACHINE + ' ' + STRING_VALUES.WON;
    }
    
  }

  getChoosenOptionsBlock() {
    return html` <p>
      ${this.player.name}: ${this.playerOptionSelected.name} | ${STRING_VALUES.MACHINE}:
      ${this.machineOptionSelected
        ? this.machineOptionSelected.name
        : '... ' + STRING_VALUES.THINKING + ' ...'}
    </p>`;
  }

  render() {
    return html`
      <div class="center">
        <p>Playing: ${this.player.name} | Points: ${this.player.points}</p>
        ${OPTIONS.map(
          (option) =>
            html`
              <button @click="${() => this.play(option)}">
                ${option.name}
              </button>
            `
        )}
        <div class="custom"></div>
        ${this.playerOptionSelected ? this.getChoosenOptionsBlock() : html``}
        ${this.result ? html`<p>${this.result}</p>` : html``}
      </div>
    `;
  }
}
customElements.define('game-view', GameView);
