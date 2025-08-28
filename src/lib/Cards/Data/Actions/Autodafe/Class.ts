import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Autodafe extends Action {
    name = "Autodafé";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.zone("Boutique").cards.length > 0 && (this.owner == this.system.game.player || this.owner.adversary().zone("Terrain").cards.length > 0)) {
            return true;
        }
        return false;
    };

    useEffect = function () {
        let value = 0;

        let shop = copy(this.owner.zone("Boutique").cards);
        for (const card of shop) {
            card.destroy();
            value++;
        }

        let terrain = copy(this.owner.adversary().zone("Terrain").cards);
        for (const card of terrain) {
            card.damageByEffect(value);
        }

        this.move("Défausse");
        this.pose();
    };
}