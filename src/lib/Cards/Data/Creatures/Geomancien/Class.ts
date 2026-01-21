import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Geomancien extends Creature {
    name = "Geomancien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);

        this.initFamily(["Nain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Endurance").init(3);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Terre") && card.owner == this.owner) {
            this.stat("Endurance").increase(2);
        }
    };
};