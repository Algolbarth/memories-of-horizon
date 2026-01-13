import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class BagarreDeTaverne extends Action {
    name = "Bagarre de taverne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner == this.system.game.player || this.owner.zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            card.damageByEffect(5);
            if (card.type == "Créature") {
                card.stat("Force").increase(10);
            }
        }
        this.move("Défausse");
        this.pose();
    };
}