import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Charrette extends Building {
    name = "Charrette";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.draw(5);
        }
    };
};