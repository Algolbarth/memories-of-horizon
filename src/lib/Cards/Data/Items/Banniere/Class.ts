import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Item';
import Text from './Text.svelte';

export class Banniere extends Objet {
    name = "Bannière";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.stat("Attaque").add += 3;
                card.stat("Vie").current += 3;
                card.stat("Vie").add += 3;
            }
        }
        this.move("Défausse");
        this.pose();
    };
}