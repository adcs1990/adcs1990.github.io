import {KEYS} from './Constants';
export class Persistence {
  static get(name) {
    return JSON.parse(window.localStorage.getItem(`${KEYS.BASE_GAME}${name}`));
  }

  static set(name, data) {
    window.localStorage.setItem(
      `${KEYS.BASE_GAME}${name}`,
      JSON.stringify(data)
    );
  }

  static remove(name) {
    window.localStorage.removeItem(`${KEYS.BASE_GAME}${name}`);
  }
}
