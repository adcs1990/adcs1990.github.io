import {html, css, LitElement} from 'lit';
import {OPTIONS} from '../util/Constants';
import {STRING_VALUES} from '../util/Constants';
import {MACHINE_TIMEOUT} from '../util/Constants';
import {Builder} from '../util/Builder';
import {EventFirer} from '../util/EventFirer';
import '../components/ImageOption';

export class GameView extends LitElement {
  static styles = css`
    .center {
      margin: 0 auto;
      text-align: center;
      color: #ffffff;
      font-size: 16pt;
    }
    .spacer {
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
    
    .container-elements {
      display: flex;
      justify-content: center;
    }

    .bar {
      background-color: #ffffff;
      min-height: 60px;
      text-align: right;
    }

    .bar > img {
      max-width: 30px;
      margin-right: 15px;
      margin-top: 15px;
    }

    .bar > img:hover {
      opacity: 0.6;
    }
  `;

  static get properties() {
    return {
      user: {type: Object},
      userOptionSelected: {type: Object},
      machineOptionSelected: {type: Object},
      result: {type: String},
    };
  }

  async play(option) {
    this.setVisibleLoader(true);
    this.result = null;
    this.machineOptionSelected = null;
    this.userOptionSelected = option;
    this.user.setOptionSelected(option);
    const machine = Builder.createMachine(
      STRING_VALUES.MACHINE,
      MACHINE_TIMEOUT
    );
    this.machineOptionSelected = await machine.run();
    machine.setOptionSelected(this.machineOptionSelected);
    this.setVisibleLoader(false);
    this.result = Builder.createGame(this.user, machine).generateResult();
  }

  getChoosenOptionsBlock() {
    return html` <p>
      ${this.user.name}: ${this.userOptionSelected.name} |
      ${STRING_VALUES.MACHINE}:
      ${this.machineOptionSelected
        ? this.machineOptionSelected.name
        : '... ' + STRING_VALUES.THINKING + ' ...'}
    </p>`;
  }

  setVisibleLoader(visible) {
    this.shadowRoot.getElementById('loader').style.display = visible
      ? 'block'
      : 'none';
  }

  exit() {
    EventFirer.dispatchEvent(this, 'exit-event', null);
  }

  render() {
    return html`
      <div id="loader" class="loader-overlay">
        <span class="loader-icon"> </span>
      </div>
      <div class="bar"><img alt="${STRING_VALUES.EXIT}" src="../../assets/logout.png" @click="${this.exit}"/></div>
      <div class="center">
        <p>${STRING_VALUES.PLAYING}: ${this.user.name} | ${STRING_VALUES.POINTS}: ${this.user.points}</p>
        <h6>${STRING_VALUES.CHOOSE}</h6>
        <div class="container-elements">
          ${OPTIONS.map(
            (option) =>
              html`
                <div class="image-container">
                  <image-option
                    @click="${() => this.play(option)}"
                    .option="${option}"
                  ></image-option>
                </div>
              `
          )}
        </div>
        <div class="spacer"></div>
        ${this.userOptionSelected ? this.getChoosenOptionsBlock() : html``}
        ${this.result ? html`<h1>${this.result}</h1>` : html``}
      </div>
    `;
  }
}
customElements.define('game-view', GameView);
