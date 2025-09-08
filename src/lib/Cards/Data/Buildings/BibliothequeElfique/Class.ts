import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class BibliothequeElfique extends Batiment {
    name = "Bibliothèque elfique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);
        this.familles.base.push("Elfe");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.familles.total().includes("Elfe")) {
            this.stat("Intelligence").add += 1;
        }
    }
}