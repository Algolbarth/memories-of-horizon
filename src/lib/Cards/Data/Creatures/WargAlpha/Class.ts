import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class WargAlpha extends Creature {
    name = "Warg alpha";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Feu", 50]]);

        this.families.base.push("Bête");

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Frappe").add("Réserve");
        }
    };
};