import type { System } from '$lib/system/class';
import { Building } from '$lib/cards/class/building';
import Text from './text.svelte';

export class Baliste extends Building {
    name = "Baliste";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.isArea("Terrain")) {
            this.adversary().zone("Terrain").cards[0].damageByEffect(20);
        }
    };
};