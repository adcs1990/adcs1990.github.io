import {User} from '../model/User';
import {Machine} from '../model/Machine';
import {Game} from '../model/Game';
import {Persistence} from './Persistence';

export class Builder {
  static createUser(name) {
    const player = Persistence.get(name) || {name: name, points: 0};
    return new User(player.name, player.points);
  }

  static createMachine(name, timeout) {
    return new Machine(name, timeout);
  }

  static createGame(player1, player2) {
    return new Game(player1, player2);
  }
}
