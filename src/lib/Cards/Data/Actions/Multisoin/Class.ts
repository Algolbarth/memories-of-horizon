import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Multisoin extends Action {
    name = "Multisoin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.isDamaged()) {
                return true;
            }
        }
        return false;
    };

    useEffect = () => {
        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            if (card.type == "Créature") {
                card.heal(5);
            }
        }
        this.move("Défausse");
        this.pose();
    };
}