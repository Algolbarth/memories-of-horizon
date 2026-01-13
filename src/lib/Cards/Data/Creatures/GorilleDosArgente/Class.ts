import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class GorilleDosArgente extends Creature {
    name = "Gorille dos argenté";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Végétal", 50]]);
        this.families.base.push("Bête");

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Écrasement").add("Réserve");
        }
    };
}