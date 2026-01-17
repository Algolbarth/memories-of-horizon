import { Card, Unit } from '../../../Class';
import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class LacDeLave extends Building {
    name = "Lac de lave";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Feu", 18]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card instanceof Unit) {
            if (card.elements.total().includes("Feu") && card.type == "Créature") {
                card.stat("Force").increase(5);
            }
            else {
                card.damageByEffect(5);
            }
        }
    };
};