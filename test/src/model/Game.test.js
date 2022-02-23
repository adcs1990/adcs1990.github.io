import {Game} from '../../../src/model/Game';
import {OPTIONS} from '../../../src/util/Constants';
import {User} from '../../../src/model/User';
import {Machine} from '../../../src/model/Machine';

describe('Game.js', () => {
  it('Generate correct result based in Winner or Tie', async () => {
    const rock = OPTIONS[0];
    const paper = OPTIONS[1];
    const scissors = OPTIONS[2];

    const nameUser = 'Joan_1234';
    const points = 4;
    const user = new User(nameUser, points);
    user.setOptionSelected(rock);

    const nameMachine = 'Machine';
    const machine = new Machine(nameMachine, 1200);
    machine.setOptionSelected(scissors);

    let game = new Game(user, machine);

    // Round one winner user
    assert.isTrue(game.generateResult().includes(nameUser));

    // Round two winner machine
    machine.setOptionSelected(scissors);
    user.setOptionSelected(paper);
    game = new Game(user, machine);
    assert.isTrue(game.generateResult().includes(nameMachine));

    // Round three its a tie
    machine.setOptionSelected(scissors);
    user.setOptionSelected(scissors);
    game = new Game(user, machine);
    assert.isTrue(game.generateResult().includes('tie'));
  });

  it('Add point if player is User and this player won', async () => {
    const rock = OPTIONS[0];
    const paper = OPTIONS[1];
    const scissors = OPTIONS[2];

    const nameUser = 'Joan_1234';
    const points = 4;
    const user = new User(nameUser, points);
    user.setOptionSelected(rock);

    const nameMachine = 'Machine';
    const machine = new Machine(nameMachine, 1200);
    machine.setOptionSelected(scissors);

    let game = new Game(user, machine);

    // Round one winner user
    game.generateResult();
    assert.equal(user.points, 5);
  });
});
