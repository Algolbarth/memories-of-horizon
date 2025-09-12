import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Decapitation extends Action {
    name = "Décapitation";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Créature" && card.stat("Protection").value() > 0) {
                return true;
            }
        }
        return false;
    };

    useEffect = () => {
        let target: undefined | Creature = undefined;
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card instanceof Creature && card.canDestroy() && ((target == undefined && card.stat("Protection").value() > 0) || (target != undefined && card.stat("Protection").value() > target.stat("Protection").value()))) {
                target = card;
            }
        }

        target?.destroy();

        this.move("Défausse");
        this.pose();
    };
}