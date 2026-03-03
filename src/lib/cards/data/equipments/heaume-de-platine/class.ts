import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class HeaumeDePlatine extends Equipment {
    name = "Heaume de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.bearer.stat("Garde").fix(100);
        }
    };
};