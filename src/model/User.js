import {Persistence} from '../util/Persistence';
import {BasePlayer} from './base/BasePlayer';

export class User extends BasePlayer {
  constructor(name, points) {
    super(name);
    this.points = points;
  }

  save() {
    Persistence.set(this.name, this);
  }

  increasePoint() {
    this.points += 1;
    this.save();
  }
}
