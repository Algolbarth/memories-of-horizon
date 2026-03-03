import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class MasqueDePlongee extends Equipment {
    name = "Masque de plongée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.initFamily(["Armure"]);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.bearer.stat("Garde").fix(10);

            this.owner().getCard("Bulle protectrice").add("Inventaire");
        }
    };
};