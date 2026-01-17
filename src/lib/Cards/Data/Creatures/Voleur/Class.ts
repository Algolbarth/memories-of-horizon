import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Voleur extends Creature {
    name = "Voleur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    fightEffect = () => {
        this.getSale("Or").increase(2);
    };
};