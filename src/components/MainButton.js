import {html, css, LitElement} from 'lit';

export class MainButton extends LitElement {
  static styles = css`
    .btn {
      width: 203px;
      height: 40px;
      background-color: #059ce8;
      background-position: center;
      border-radius: 4px;
      border: none;
      color: white;
      cursor: pointer;
      font-family: Arial;
      font-size: 16px;
      outline: none;
      text-transform: uppercase;
      transition: background 0.8s;
    }
    .btn:hover {
      opacity: 0.8;
    }

    .btn:disabled {
      cursor: no-drop;
      background-color: gray;
    }
  `;

  static properties = {
    text: {type: String},
    enabled: {type: Boolean},
  };

  constructor(text, enabled) {
    super();
    this.text = text;
    this.enabled = enabled;
  }

  render() {
    return html`
      <button class="btn" .disabled="${!this.enabled}">
        ${this.text}
      </button>
    `;
  }
}
customElements.define('main-button', MainButton);
