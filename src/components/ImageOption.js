import {html, css, LitElement} from 'lit';

export class ImageOption extends LitElement {
  static styles = css`
    
  `;

  static get properties() {
    return {
      option: {type: Object},
    };
  }

  render() {
    return html`
      <img class="" src="${this.option.img}"/>
    `;
  }
}
customElements.define('image-option', ImageOption);
