
export class Player {

  constructor(name, points) {
    this.name = name;
    this.points = points;
  }

  increasePoint(){
    this.points += 1;
  }

}