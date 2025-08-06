import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Archimere extends Creature {
    name = "Archimère";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Bête", "Reptile");

        this.stat("Vie").base = 25;
        this.stat("Vie").current = 25;
        this.stat("Attaque").base = 25;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.owner) {
            for (let i = 0; i < card.familles.total().length; i++) {
                this.stat("Vie").current += 5;
                this.stat("Vie").add += 5;
                this.stat("Attaque").add += 5;
            }
        }
    };
}