import { Unit } from '../../../Class';
import { Batiment } from '../Batiment';
import Text from './Text.svelte';

export class LacDeLave extends Batiment {
    name = "Lac de lave";

    constructor(system) {
        super(system);

        this.init([["Or", 18], ["Feu", 18]]);
        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;

        this.text = Text;
    };

    otherPoseEffect = function (card) {
        if (this.zone.name == "Terrain" && card instanceof Unit) {
            if (card.elements.total().includes("Feu") && card.type == "Créature") {
                card.stat("Attaque").add += 5;
            }
            else {
                card.damage(5);
            }
        }
    };
}