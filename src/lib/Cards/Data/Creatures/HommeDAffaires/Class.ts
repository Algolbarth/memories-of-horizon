import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class HommeDAffaires extends Creature {
    name = "Homme d'affaires";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherSellEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.owner == this.owner) {
            this.owner.ressource("Or").current += 5;
        }
    };
}