import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Batiment';
import Text from './Text.svelte';

export class Catapulte extends Batiment {
    name = "Catapulte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);
        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;

        this.text = Text;
    };

    turnEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.adversary().zone("Terrain").cards[0].damageByEffect(20);
        }
    };
}