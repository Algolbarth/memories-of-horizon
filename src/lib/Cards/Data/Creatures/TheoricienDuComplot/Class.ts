import type { System } from '../../../../System/Class';
import { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class TheoricienDuComplot extends Creature {
    name = "Théoricien du complot";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Feu", 12]]);
        this.families.base.push("Gobelin");

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);

        this.text = Text;
    };

    otherDestroyEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.owner == this.owner && card.zone.name == "Pile") {
            this.owner.ressource("Or").current += 1;
            this.owner.ressource("Feu").current += 1;
        }
    };
};