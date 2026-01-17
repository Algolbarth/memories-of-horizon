import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class LoupDesMontagnes extends Creature {
    name = "Loup des montagnes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Terre", 8]]);

        this.families.base.push("Bête");

        this.stat("Constitution").init(5);
        this.stat("Force").init(15);

        this.text = Text;
    };

    fightEffect = (defender) => {
        if (defender.stat("Endurance").value() > 0) {
            this.stat('Force').increase(5);
        }
    };
};