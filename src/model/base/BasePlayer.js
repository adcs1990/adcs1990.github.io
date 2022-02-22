export class BasePlayer {
  constructor(name) {
    this.name = name;
    this.lastOptionSelected;
  }

  setOptionSelected(option) {
    this.lastOptionSelected = option;
  }
}
