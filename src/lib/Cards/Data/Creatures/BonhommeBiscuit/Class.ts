import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class BonhommeBiscuit extends Creature {
    name = "Bonhomme biscuit";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Nourriture");

        this.stat("Santé").base = 1;
        this.stat("Santé").current = 1;
        this.stat("Force").base = 1;

        this.text = Text;
    };

    targetEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.familles.total().includes("Nourriture")) {
            this.stat("Santé").add += 3;
            this.stat("Santé").current += 3;
            this.stat("Force").add += 3;
        }
    };
}