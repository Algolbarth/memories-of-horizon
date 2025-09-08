import { Card, Unit } from '../../../Class';
import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class LacDeLave extends Batiment {
    name = "Lac de lave";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Feu", 18]]);
        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card instanceof Unit) {
            if (card.elements.total().includes("Feu") && card.type == "Créature") {
                card.stat("Force").add += 5;
            }
            else {
                card.damageByEffect(5);
            }
        }
    };
}