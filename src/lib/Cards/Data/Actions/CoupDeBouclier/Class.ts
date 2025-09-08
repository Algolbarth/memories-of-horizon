import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class CoupDeBouclier extends Action {
    name = "Coup de bouclier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length == 0) {
            return false;
        }
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.stat("Endurance").value() > 0) {
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
        let value = 0;

        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && value < card.stat("Endurance").value()) {
                value = card.stat("Endurance").value();
            }
        }

        target.damageByEffect(2 * value);

        this.move("Défausse");
        this.pose();
    };
}