import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class Canon extends Building {
    name = "Canon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 80]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.isArea("Terrain")) {
            this.adversary().zone("Terrain").cards[0].damageByEffect(50);
        }
    };
};