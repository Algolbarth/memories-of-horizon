import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Item';
import Text from './Text.svelte';

export class CorDeGuerre extends Objet {
    name = "Cor de guerre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature") {
                return true;
            }
        }
        return false;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.stat("Force").add += 5;
            }
        }
        this.move("Défausse");
        this.pose();
    };
}