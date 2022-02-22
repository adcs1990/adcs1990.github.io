export const STRING_VALUES = {
  JOIN: 'Join',
  NAME: 'Name',
  ROCK: 'Rock',
  PAPPER: 'Papper',
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
    enemy: STRING_VALUES.PAPPER,
  },
  {
    name: STRING_VALUES.PAPPER,
    enemy: STRING_VALUES.SCISSORS,
  },
  {
    name: STRING_VALUES.SCISSORS,
    enemy: STRING_VALUES.ROCK,
  },
];
