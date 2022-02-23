import { BasePlayer } from "../../../../src/model/base/BasePlayer";
import { User } from "../../../../src/model/User";
import { Machine } from "../../../../src/model/Machine";
import {OPTIONS} from "../../../../src/util/Constants";

describe('BasePlayer.js', () => {
    it('Correctly set the option selected', async () => {
      const user = new User('Joan', 0);
      user.setOptionSelected(OPTIONS[0]);
      assert.equal(user.lastOptionSelected, OPTIONS[0]);

      const machine = new Machine('IA', 1200);
      machine.setOptionSelected(OPTIONS[1]);
      assert.equal(machine.lastOptionSelected, OPTIONS[1]);

      const basePlayer = new BasePlayer('Example');
      basePlayer.setOptionSelected(OPTIONS[2]);
      assert.equal(basePlayer.lastOptionSelected, OPTIONS[2]);
    });
  
  });