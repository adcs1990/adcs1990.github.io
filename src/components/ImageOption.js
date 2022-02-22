import {html, css, LitElement} from 'lit';

export class ImageOption extends LitElement {
  static styles = css`
    .img-component {
      max-width: 100px;
    }
    .img-component:hover {
      opacity: 0.7;
    }
  `;

  static get properties() {
    return {
      option: {type: Object},
    };
  }

  render() {
    return html` <img class="img-component" src="${this.option.img}" /> `;
  }
}
customElements.define('image-option', ImageOption);
