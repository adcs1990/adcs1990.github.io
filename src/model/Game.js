import {STRING_VALUES} from '../util/Constants';
import {User} from './User';

export class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.result;
  }

  generateResult() {
    if (this.player2.lastOptionSelected === this.player1.lastOptionSelected) {
      this.result = STRING_VALUES.RESULT_TIE;
    } else if (
      this.player2.lastOptionSelected.enemy.includes(
        this.player1.lastOptionSelected.name
      )
    ) {
      this.result = this.player1.name + ' ' + STRING_VALUES.WON;
      this.addPoint(this.player1);
    } else {
      this.result = this.player2.name + ' ' + STRING_VALUES.WON;
    }
    return this.result;
  }

  addPoint(player) {
    if (player instanceof User) {
      player.increasePoint();
    }
  }
}
