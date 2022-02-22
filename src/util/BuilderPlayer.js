import {User} from '../model/User';
import {Persistence} from './Persistence';

export class BuilderUser {
  static getUser(name) {
    const player = Persistence.get(name) || {name: name, points: 0};
    return new User(player.name, player.points);
  }
}
