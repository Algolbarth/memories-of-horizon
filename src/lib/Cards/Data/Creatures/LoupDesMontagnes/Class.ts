import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class LoupDesMontagnes extends Creature {
    name = "Loup des montagnes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Terre", 8]]);
        this.familles.base.push("Bête");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 15;

        this.text = Text;
    };

    fightEffect = function (defender) {
        if (defender.stat("Endurance").value() > 0) {
            this.stat('Force').add += 5;
        }
    };
}