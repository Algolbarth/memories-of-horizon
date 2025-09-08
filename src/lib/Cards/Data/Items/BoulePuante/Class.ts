import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class BoulePuante extends Action {
    name = "Boule puante";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Créature" && card.stat("Protection").value() > 0) {
                return true;
            }
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.adversary().zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature" && card.stat("Protection").value() > 0) {
                    return true;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Unit) {
        target.stat("Protection").decrease(5);
        this.move("Défausse");
        this.pose();
    };
}