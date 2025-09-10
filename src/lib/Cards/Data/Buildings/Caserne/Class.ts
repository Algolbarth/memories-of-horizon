import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Caserne extends Building {
    name = "Caserne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);
        this.stat("Constitution").init(20);

        this.text = Text;
    };

    turnEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Soldat").add("Terrain");
        }
    };
}