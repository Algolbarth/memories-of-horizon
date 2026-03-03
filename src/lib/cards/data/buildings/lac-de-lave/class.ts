import { Card } from '$lib/cards/class/class';
import { Unit } from '$lib/cards/class/unit';
import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';
import { Creature } from '$lib/cards/class/creature';

export class LacDeLave extends Building {
    name = "Lac de lave";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Feu", 18]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card instanceof Unit) {
            if (card.isElement("Feu") && card instanceof Creature) {
                card.stat("Force").increase(5);
            }
            else {
                card.damageByEffect(5);
            }
        }
    };
};