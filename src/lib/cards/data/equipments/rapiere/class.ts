import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class Rapiere extends Equipment {
    name = "Rapière";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Arme"]);

        this.text = Text;
    };

    startBattleEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.bearer.stat("Critique").set(100);
        }
    };
};