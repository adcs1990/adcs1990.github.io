import {html, css, LitElement} from 'lit';
import {EventFirer} from '../util/EventFirer';

export class InputField extends LitElement {
  static styles = css`
    .matter-textfield-outlined {
      --matter-helper-theme: rgb(
        var(--matter-theme-rgb, var(--matter-primary-rgb, 33, 150, 243))
      );
      --matter-helper-safari1: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);
      --matter-helper-safari2: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.6);
      --matter-helper-safari3: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.87);
      position: relative;
      display: inline-block;
      padding-top: 6px;
      font-family: var(
        --matter-font-family,
        'Roboto',
        'Segoe UI',
        BlinkMacSystemFont,
        system-ui,
        -apple-system
      );
      font-size: 16px;
      line-height: 1.5;
    }

    /* Input, Textarea */
    .matter-textfield-outlined > input {
      box-sizing: border-box;
      margin: 0;
      border-style: solid;
      border-width: 1px;
      border-color: transparent var(--matter-helper-safari2)
        var(--matter-helper-safari2);
      border-radius: 4px;
      padding: 15px 13px 15px;
      width: 100%;
      height: inherit;
      color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.87);
      -webkit-text-fill-color: currentColor; /* Safari */
      background-color: transparent;
      box-shadow: inset 1px 0 transparent, inset -1px 0 transparent,
        inset 0 -1px transparent;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      caret-color: var(--matter-helper-theme);
      transition: border 0.2s, box-shadow 0.2s;
    }

    .matter-textfield-outlined > input:not(:focus):placeholder-shown,
    .matter-textfield-outlined > textarea:not(:focus):placeholder-shown {
      border-top-color: var(--matter-helper-safari2);
    }

    /* Span */
    .matter-textfield-outlined > input + span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      max-height: 100%;
      color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.6);
      font-size: 75%;
      line-height: 15px;
      cursor: text;
      transition: color 0.2s, font-size 0.2s, line-height 0.2s;
    }

    .matter-textfield-outlined > input:not(:focus):placeholder-shown + span,
    .matter-textfield-outlined > textarea:not(:focus):placeholder-shown + span {
      font-size: inherit;
      line-height: 68px;
    }

    /* Corners */
    .matter-textfield-outlined > input + span::before,
    .matter-textfield-outlined > input + span::after {
      content: '';
      display: block;
      box-sizing: border-box;
      margin-top: 6px;
      border-top: solid 1px var(--matter-helper-safari2);
      min-width: 10px;
      height: 8px;
      pointer-events: none;
      box-shadow: inset 0 1px transparent;
      transition: border 0.2s, box-shadow 0.2s;
    }

    .matter-textfield-outlined > input + span::before {
      margin-right: 4px;
      border-left: solid 1px transparent;
      border-radius: 4px 0;
    }

    .matter-textfield-outlined > input + span::after {
      flex-grow: 1;
      margin-left: 4px;
      border-right: solid 1px transparent;
      border-radius: 0 4px;
    }

    .matter-textfield-outlined
      > input:not(:focus):placeholder-shown
      + span::before,
    .matter-textfield-outlined
      > input:not(:focus):placeholder-shown
      + span::after {
      border-top-color: transparent;
    }

    /* Hover */
    .matter-textfield-outlined:hover > input {
      border-color: transparent var(--matter-helper-safari3)
        var(--matter-helper-safari3);
    }

    .matter-textfield-outlined:hover > input + span::before,
    .matter-textfield-outlined:hover > input + span::after {
      border-top-color: var(--matter-helper-safari3);
    }

    .matter-textfield-outlined:hover > input:not(:focus):placeholder-shown {
      border-color: var(--matter-helper-safari3);
    }

    /* Focus */
    .matter-textfield-outlined > input:focus {
      border-color: transparent var(--matter-helper-theme)
        var(--matter-helper-theme);
      box-shadow: inset 1px 0 var(--matter-helper-theme),
        inset -1px 0 var(--matter-helper-theme),
        inset 0 -1px var(--matter-helper-theme);
      outline: none;
    }

    .matter-textfield-outlined > input:focus + span {
      color: var(--matter-helper-theme);
    }

    .matter-textfield-outlined > input:focus + span::before,
    .matter-textfield-outlined > input:focus + span::after {
      border-top-color: var(--matter-helper-theme) !important;
      box-shadow: inset 0 1px var(--matter-helper-theme);
    }

    /* Disabled */
    .matter-textfield-outlined > input:disabled,
    .matter-textfield-outlined > input:disabled + span {
      border-color: transparent var(--matter-helper-safari1)
        var(--matter-helper-safari1) !important;
      color: rgba(var(--matter-onsurface-rgb, 0, 0, 0), 0.38);
      pointer-events: none;
    }

    .matter-textfield-outlined > input:disabled + span::before,
    .matter-textfield-outlined > input:disabled + span::after {
      border-top-color: var(--matter-helper-safari1) !important;
    }

    .matter-textfield-outlined > input:disabled:placeholder-shown,
    .matter-textfield-outlined > input:disabled:placeholder-shown + span {
      border-top-color: var(--matter-helper-safari1) !important;
    }

    .matter-textfield-outlined
      > input:disabled:placeholder-shown
      + span::before,
    .matter-textfield-outlined
      > input:disabled:placeholder-shown
      + span::after {
      border-top-color: transparent !important;
    }

    .error > input:focus {
      border-color: red !important;
    }

    /* Faster transition in Safari for less noticable fractional font-size issue */
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        .matter-textfield-outlined > input,
        .matter-textfield-outlined
          > input
          + span
          .matter-textfield-outlined
          > input
          + span::before,
        .matter-textfield-outlined > input + span::after {
          transition-duration: 0.1s;
        }
      }
    }
  `;

  static get properties() {
    return {
      placeholder: {type: String},
      required: {type: Boolean},
      text: {type: String},
    };
  }

  updateText(e) {
    EventFirer.dispatchEvent(this, 'input-event', e.target.value);
  }

  render() {
    return html`
      <label class="matter-textfield-outlined">
        <input placeholder=" " @input=${this.updateText} />
        <span>${this.placeholder + (this.required ? '*' : '')}</span>
      </label>
    `;
  }
}
customElements.define('input-field', InputField);
