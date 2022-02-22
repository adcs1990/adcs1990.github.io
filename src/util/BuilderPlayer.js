import {Player} from '../model/Player';
import {Persistence} from './Persistence';

export class BuilderPlayer {
  static getPlayer(name) {
    let player = Persistence.get(name);
    if (!player) {
      player = new Player(name, 0);
      Persistence.set(name, player);
    }
    return player;
  }
}