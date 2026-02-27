import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class Catapulte extends Building {
    name = "Catapulte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.isArea("Terrain")) {
            this.adversary().zone("Terrain").cards[0].damageByEffect(20);
        }
    };
};