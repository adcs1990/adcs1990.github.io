import {Player} from '../model/Player';
import {Persistence} from './Persistence';

export class BuilderPlayer {
  static getPlayer(name) {
    const player = Persistence.get(name) || {name: name, points: 0};
    return new Player(player.name, player.points);
  }
}
