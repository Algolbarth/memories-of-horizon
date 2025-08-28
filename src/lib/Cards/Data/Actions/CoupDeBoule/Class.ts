import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class CoupDeBoule extends Action {
    name = "Coup de boule";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length == 0) {
            return false;
        }
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature") {
                return true;
            }
        }
        return false;
    };

    useEffect = function () {
        let value = 0;
        let target = this.owner.adversary().zone("Terrain").cards[0];

        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && value < card.stat("Attaque").value()) {
                value = card.stat("Attaque").value();
            }
        }

        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (target.stat("Vie").value() < card.stat("Vie").value()) {
                target = card;
            }
        }

        target.damageByEffect(value);

        this.move("Défausse");
        this.pose();
    };
}