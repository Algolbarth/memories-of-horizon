import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Building } from '../../../Class/Building';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Demolition extends Action {
    name = "Démolition";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Bâtiment") {
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
                if (target == undefined && card.type == "Bâtiment") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Building) {
        target.destroy();
        this.move("Défausse");
        this.pose();
    };
}