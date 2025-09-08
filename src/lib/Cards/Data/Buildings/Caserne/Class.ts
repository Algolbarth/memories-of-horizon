import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class Caserne extends Batiment {
    name = "Caserne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;

        this.text = Text;
    };

    turnEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Soldat").add("Terrain");
        }
    };
}