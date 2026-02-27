import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class Decapitation extends Action {
    name = "Décapitation";

    constructor(system: System) {
        super(system);

        this.init([["Or", 80]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.adversary().zone("Terrain").cards) {
            if (card instanceof Creature && card.stat("Protection").value() > 0) {
                return true;
            }
        }
        return false;
    };

    useEffect = () => {
        let target: undefined | Creature = undefined;
        for (const card of this.adversary().zone("Terrain").cards) {
            if (card instanceof Creature && card.canDestroy() && ((target == undefined && card.stat("Protection").value() > 0) || (target != undefined && card.stat("Protection").value() > target.stat("Protection").value()))) {
                target = card;
            }
        }

        target?.destroy();

        this.move("Défausse");
        this.pose();
    };
};