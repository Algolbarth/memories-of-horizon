import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class MilieuAquatique extends Action {
    name = "Milieu aquatique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);

        this.text = Text;
    };

    canUse = function () {
         for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.elements.total().includes("Eau")) {
                return true;
            }
        }
        return false;
    };

    useEffect = function () {
        let value = 5;
        if (this.owner.ressource("Eau").total() >= 50) {
            this.owner.ressource("Eau").spend(50);
            value = 10;
        }

        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature" && card.elements.total().includes("Eau")) {
                card.stat("Constitution").increase(value);
                card.stat("Force").increase(value);
            }
        }

        this.move("Défausse");
        this.pose();
    };
}