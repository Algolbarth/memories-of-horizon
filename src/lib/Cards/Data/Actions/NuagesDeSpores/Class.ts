import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class NuageDeSpores extends Action {
    name = "Nuage de spores";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Créature") {
                return true;
            }
        }
        return false;
    };

    useEffect = () => {
        let adversary_land = copy(this.owner.adversary().zone("Terrain").cards);
        for (const card of adversary_land) {
            if (card.type == "Créature") {
                card.stat("Poison").increase(5);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};