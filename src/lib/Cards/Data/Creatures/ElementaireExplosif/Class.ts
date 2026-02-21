import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireExplosif extends Creature {
    name = "Élémentaire explosif";

    constructor(system: System) {
        super(system);

        this.init([["Feu", 50]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    perishEffect = () => {
        if (this.owner().ressource("Feu").production >= 5) {
            this.owner().ressource("Feu").decrease(5);

            let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);
            for (const card of adversary_battlefield) {
                card.damageByEffect(5);
            }
        }
    };
};