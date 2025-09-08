import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Danseuse extends Creature {
    name = "Danseuse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    startBattleEffect = function () {
        this.stat("Esquive").step += 1;
    };
}