import {Game} from '../../../src/model/Game';
import {OPTIONS} from '../../../src/util/Constants';
import {User} from '../../../src/model/User';
import {Machine} from '../../../src/model/Machine';

describe('Game.js', () => {
  
  let user;
  let nameUser;
  let points;
  let machine;
  let nameMachine;
  let rock;
  let paper;
  let scissors;
  let game;

  beforeEach( function(){ 
    rock = OPTIONS[0];
    paper = OPTIONS[1];
    scissors = OPTIONS[2];

    nameUser = 'Joan_1234';
    points = 4;
    user = new User(nameUser, points);

    nameMachine = 'Machine';
    machine = new Machine(nameMachine, 1200);
  });

  it('Generate correct result when user wins', async () => {
    user.setOptionSelected(rock);
    machine.setOptionSelected(scissors);
    game = new Game(user, machine);
    assert.isTrue(game.generateResult().includes(nameUser));
  });

  it('Generate correct result when machine wins', async () => {
    machine.setOptionSelected(scissors);
    user.setOptionSelected(paper);
    game = new Game(user, machine);
    assert.isTrue(game.generateResult().includes(nameMachine));
  });

  it('Generate correct result when it\'s a tie', async () => {
    machine.setOptionSelected(scissors);
    user.setOptionSelected(scissors);
    game = new Game(user, machine);
    assert.isTrue(game.generateResult().includes('tie'));
  });


  it('Add point if player is User and this player won', async () => {
    user.setOptionSelected(rock);
    machine.setOptionSelected(scissors);
    game = new Game(user, machine);

    // Round one winner user
    game.generateResult();
    assert.equal(user.points, 5);
  });
});
