import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Polissage extends Action {
    name = "Polissage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Main").cards) {
            if (card.familles.total().includes("Armure")) {
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

            for (const card of this.owner.zone("Main").cards) {
                if (target == undefined && card.familles.total().includes("Armure")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Equipment) {
        target.equipStat("Défense").add += 10;
        this.move("Défausse");
        this.pose();
    };
}