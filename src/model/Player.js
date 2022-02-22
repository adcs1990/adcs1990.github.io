import {Persistence} from '../util/Persistence';
export class Player {
  constructor(name, points) {
    this.name = name;
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
