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
  PLAYING: 'Playing',
  POINTS: 'Points',
  NEW_USER: 'Create or use an existing user',
  GAME_NAME: 'Rock, Paper, Scissors Game',
  EXIT: 'Exit',
  CHOOSE: 'Choose an option',
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
