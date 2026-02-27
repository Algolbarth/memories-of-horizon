import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import Text from './text.svelte';
import { Creature } from '../../../class/creature';

export class BagarreDeTaverne extends Action {
    name = "Bagarre de taverne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().is_player || this.owner().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            card.damageByEffect(5);
            if (card instanceof Creature) {
                card.stat("Force").increase(10);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};