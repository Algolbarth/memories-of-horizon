import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Eruption extends Action {
    name = "Éruption";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75], ["Feu", 75]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = function (target: Unit) {
        target.damageByEffect(300);
        this.move("Défausse");
        this.pose();
    };
}