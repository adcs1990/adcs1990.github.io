import {OPTIONS} from '../util/Constants';

export class Machine {
  constructor(timeOut) {
    this.timeOut = timeOut;
  }

  run = async () => {
    const randomOption = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    setTimeout(() => {
      return randomOption;
    }, this.timeOut);
  };
}
