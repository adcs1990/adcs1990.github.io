import {html, css, LitElement} from 'lit';

export class ImageOption extends LitElement {
  static styles = css`
    .img-component {
      max-width: 100px;
    }
    .img-component:hover {
      opacity: 0.7;
    }
    .container {
      border-width: 4px;
      border-color: black;
      border-style: solid;
      padding: 10px;
      flex-direction: column;
    }
    .container:hover {
      background-color: gray;
    }
  `;

  static get properties() {
    return {
      option: {type: Object},
    };
  }

  render() {
    return html` 
    <div class="container">
      <img class="img-component" src="${this.option.img}" alt="${this.option.name}" />
    </div>`;
  }
}
customElements.define('image-option', ImageOption);
