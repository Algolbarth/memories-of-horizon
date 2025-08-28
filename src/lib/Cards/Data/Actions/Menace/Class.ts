import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Menace extends Action {
    name = "Menace";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length > 0 || (this.owner == this.system.game.player && this.owner.zone("Terrain").cards.length > 0)) {
            return true;
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
                if (target == undefined) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Unit) {
        target.stat("Protection").add += 5;
        this.move("Défausse");
        this.pose();
    };
}