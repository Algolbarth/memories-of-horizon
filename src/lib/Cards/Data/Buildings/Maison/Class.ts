import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Maison extends Building {
    name = "Maison";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Humain").add("Terrain");
        }
    };
};