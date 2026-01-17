import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Barbare extends Creature {
    name = "Barbare";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    fightEffect = () => {
        this.stat("Force").increase(2);
    };
};