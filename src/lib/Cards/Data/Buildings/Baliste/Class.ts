import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Baliste extends Building {
    name = "Baliste";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    turnEffect = () => {
        if (this.zone.name == "Terrain") {
            this.adversary().zone("Terrain").cards[0].damageByEffect(20);
        }
    };
};