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

    canUse = () => {
        if (this.owner.zone("Pile").cards.length > 0 && (this.owner == this.system.game.player || this.adversary().zone("Terrain").cards.length > 0)) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let value = 0;

        let stack = copy(this.owner.zone("Pile").cards);
        for (const card of stack) {
            card.destroy();
            value++;
        }

        let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);
        for (const card of adversary_battlefield) {
            card.damageByEffect(value);
        }

        this.move("Défausse");
        this.pose();
    };
};