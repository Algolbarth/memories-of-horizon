import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Noyade extends Action {
    name = "Noyade";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Eau", 20]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Créature" && !card.elements.total().includes("Eau")) {
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
                if (target == undefined && card.type == "Créature" && !card.elements.total().includes("Eau")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Creature) {
        target.destroy();
        this.move("Défausse");
        this.pose();
    };
}