import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MinistreOndin extends Creature {
    name = "Ministre ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 22], ["Eau", 22]]);
        this.families.base.push("Ondin");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.families.total().includes("Ondin") && card.owner == this.owner) {
            this.owner.ressource("Eau").current += 5;
        }
    };
}