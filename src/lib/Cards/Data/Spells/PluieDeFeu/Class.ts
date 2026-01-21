import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';

export class PluieDeFeu extends Spell {
    name = "Pluie de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);

        this.initFamily(["Sort"]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let damage: number = 0;
        if (this.owner.ressource("Mana").total() >= 50) {
            this.owner.ressource("Mana").spend(50);
            damage = 20;
        }
        else {
            damage = 10;
        }

        let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);
        for (const card of adversary_battlefield) {
            card.damageByEffect(damage);
        }

        this.move("Défausse");
        this.pose();
    };
};