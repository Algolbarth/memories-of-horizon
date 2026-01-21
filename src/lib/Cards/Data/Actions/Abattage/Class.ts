import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Abattage extends Action {
    name = "Abattage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.adversary().zone("Terrain").cards) {
            if (card instanceof Creature && card.stat("Vitalité").value() > 0) {
                return true;
            }
        }
        return false;
    };

    useEffect = () => {
        let target: undefined | Creature = undefined;

        for (const card of this.adversary().zone("Terrain").cards) {
            if (card instanceof Creature && card.canDestroy() && (target == undefined || (target != undefined && card.stat("Vitalité").value() > target.stat("Vitalité").value()))) {
                target = card;
            }
        }

        if (target != undefined) {
            this.targeting(target);

            target.destroy();
        }

        this.move("Défausse");
        this.pose();
    };
};