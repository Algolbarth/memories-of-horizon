import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

export class GorilleDosArgente extends Creature {
    name = "Gorille dos argenté";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Végétal", 50]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Écrasement").add("Inventaire");
        }
    };
};