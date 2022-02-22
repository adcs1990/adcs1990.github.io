export const STRING_VALUES = {
  JOIN: 'Join',
  NAME: 'Name',
  ROCK: 'Rock',
  PAPER: 'Paper',
  SCISSORS: 'Scissors',
  MACHINE: 'Machine',
  THINKING: 'Thinking',
  RESULT_TIE: "It's a tie!",
  WON: 'won!',
};

export const MACHINE_TIMEOUT = 1200;

export const KEYS = {
  BASE_GAME: 'base-game-',
};

export const OPTIONS = [
  {
    name: STRING_VALUES.ROCK,
    enemy: STRING_VALUES.PAPER,
    img: 'assets/rock.png',
  },
  {
    name: STRING_VALUES.PAPER,
    enemy: STRING_VALUES.SCISSORS,
    img: 'assets/paper.png',
  },
  {
    name: STRING_VALUES.SCISSORS,
    enemy: STRING_VALUES.ROCK,
    img: 'assets/scissors.png',
  },
];
