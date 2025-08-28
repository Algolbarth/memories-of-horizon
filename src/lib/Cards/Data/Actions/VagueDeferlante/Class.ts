import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class VagueDeferlante extends Action {
    name = "Vague déferlante";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = function () {
        let value = 5;
        if (this.owner.ressource("Eau").total() >= 25) {
            this.owner.ressource("Eau").spend(25);
            value = 10;
        }

        let terrain = copy(this.owner.adversary().zone("Terrain").cards);
        for (const card of terrain) {
            card.damageByEffect(value);
        }

        this.move("Défausse");
        this.pose();
    };
}