import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class Puit extends Building {
    name = "Puit";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isElement("Eau") && this.isAlly(card)) {
            this.owner().ressource("Or").produce(5);
        }
    };
};