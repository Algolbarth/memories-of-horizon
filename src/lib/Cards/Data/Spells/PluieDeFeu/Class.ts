import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';

export class PluieDeFeu extends Spell {
    name = "Pluie de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);
        this.familles.base.push("Sort");

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let damage;
        if (this.owner.ressource("Mana").total() >= 50) {
            this.owner.ressource("Mana").spend(50);
            damage = 20;
        }
        else {
            damage = 10;
        }

        let terrain = copy(this.owner.adversary().zone("Terrain").cards);
        for (const card of terrain) {
            card.damageByEffect(damage);
        }

        this.move("Défausse");
        this.pose();
    };
}