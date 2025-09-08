import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';
import Text from './Text.svelte';

export class Baliste extends Batiment {
    name = "Baliste";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);
        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;

        this.text = Text;
    };

    turnEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.adversary().zone("Terrain").cards[0].damageByEffect(20);
        }
    };
}