import {OPTIONS} from '../util/Constants';
import {BasePlayer} from './base/BasePlayer';

export class Machine extends BasePlayer {
  constructor(name, timeOut) {
    super(name);
    this.timeOut = timeOut;
  }

  async run() {
    const randomOption = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(randomOption);
      }, this.timeOut);
    });
  }
}
