import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Renforcement extends Action {
    name = "Renforcement";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner.zone("Terrain").cards[0]);
        }
    };

    useEffect = function (target: Unit) {
        target.stat("Santé").increase(15);
        target.stat("Vitalité").increase(15);
        this.move("Défausse");
        this.pose();
    };
}