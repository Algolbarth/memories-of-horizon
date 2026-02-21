import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class RazDeMaree extends Action {
    name = "Raz-de-marée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Eau", 50]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let value = 20;
        while (this.owner().ressource("Eau").total() >= 5) {
            this.owner().ressource("Eau").spend(5);
            value++;
        }

        let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);
        for (const card of adversary_battlefield) {
            card.damageByEffect(value);
        }

        this.move("Défausse");
        this.pose();
    };
}