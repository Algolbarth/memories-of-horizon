import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Bagarreur extends Creature {
    name = "Bagarreur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.owner) {
            card.stat("Attaque").step += 5;
        }
    };
}