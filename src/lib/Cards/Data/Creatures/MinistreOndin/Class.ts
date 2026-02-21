import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MinistreOndin extends Creature {
    name = "Ministre ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 22], ["Eau", 22]]);

        this.initFamily(["Ondin"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card instanceof Creature && card.isFamily("Ondin") && this.isAlly(card)) {
            this.owner().ressource("Eau").produce(5);
        }
    };
};