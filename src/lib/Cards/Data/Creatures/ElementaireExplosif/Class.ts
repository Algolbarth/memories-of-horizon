import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireExplosif extends Creature {
    name = "Élémentaire explosif";

    constructor(system: System) {
        super(system);

        this.init([["Feu", 50]]);
        this.familles.base.push("Élémentaire");

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    dieEffect = () => {
        if (this.owner.ressource("Feu").max >= 5) {
            this.owner.ressource("Feu").max -= 5;
            let terrain = copy(this.owner.adversary().zone("Terrain").cards);
            for (const card of terrain) {
                card.damageByEffect(5);
            }
        }
    };
}