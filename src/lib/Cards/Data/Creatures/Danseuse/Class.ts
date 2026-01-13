import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Danseuse extends Creature {
    name = "Danseuse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startBattleEffect = () => {
        this.stat("Esquive").step += 1;
    };
}