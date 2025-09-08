import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class GardeNain extends Creature {
    name = "Garde nain";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Terre", 18]]);
        this.familles.base.push("Nain");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;
        this.stat("Endurance").base = 5;
        this.stat("Protection").base = 1;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Bâtiment" && card.owner == this.owner) {
            this.stat("Endurance").add += 1;
        }
    };
}