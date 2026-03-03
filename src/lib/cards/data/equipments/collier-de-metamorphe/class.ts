import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class CollierDeMetamorphe extends Equipment {
    name = "Collier de métamorphe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.owner().getCard("Métamorphose").add("Inventaire");
        }
    };
};