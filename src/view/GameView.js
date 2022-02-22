import {html, css, LitElement} from 'lit';
import '../components/MainButton';
import {OPTIONS} from '../util/Constants';
import {STRING_VALUES} from '../util/Constants';
import {MACHINE_TIMEOUT} from '../util/Constants';
import { Machine } from '../model/Machine';

export class GameView extends LitElement {
  static styles = css`
    .center {
      margin: 0 auto;
      text-align: center;
    }
    .custom {
      margin-top: 20px;
    }
    @keyframes rotator {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(36deg);
      }
      20% {
        transform: rotate(72deg);
      }
      30% {
        transform: rotate(108deg);
      }
      40% {
        transform: rotate(144deg);
      }
      50% {
        transform: rotate(180deg);
      }
      60% {
        transform: rotate(216deg);
      }
      70% {
        transform: rotate(252deg);
      }
      80% {
        transform: rotate(288deg);
      }
      90% {
        transform: rotate(324deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      display: none;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .loader-icon {
      width: 15px;
      height: 15px;
      padding: 15px;
      content: ' ';
      border-radius: 25%;
      border: 1px solid white;
      background-color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: rotator;
      animation-duration: 0.1s;
      animation-iteration-count: infinite;
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
    this.requestUpdate();
  }

  play = async (option) => {
    this.result = null;
    this.machineOptionSelected = null;
    this.playerOptionSelected = option;
    this.VisibleLoader(true);
    this.machineOptionSelected = await new Machine(MACHINE_TIMEOUT).run();
    this.setVisibleLoader(false);
    this.manageResults();
  }

  manageResults() {
    if (this.machineOptionSelected === this.playerOptionSelected) {
      this.result = STRING_VALUES.RESULT_TIE;
    } else if (
      this.machineOptionSelected.enemy.includes(this.playerOptionSelected.name)
    ) {
      this.result = this.player.name + ' ' + STRING_VALUES.WON;
      this.addPoint();
    } else {
      this.result = STRING_VALUES.MACHINE + ' ' + STRING_VALUES.WON;
    }
  }

  getChoosenOptionsBlock() {
    return html` <p>
      ${this.player.name}: ${this.playerOptionSelected.name} |
      ${STRING_VALUES.MACHINE}:
      ${this.machineOptionSelected
        ? this.machineOptionSelected.name
        : '... ' + STRING_VALUES.THINKING + ' ...'}
    </p>`;
  }

  setVisibleLoader(visible) {
    this.shadowRoot.getElementById('loader').style.display = visible ? 'block' : 'none';
  }

  render() {
    return html`
      <div id="loader" class="loader-overlay">
        <span class="loader-icon"> </span>
      </div>
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
