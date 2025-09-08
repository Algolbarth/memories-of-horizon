import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Barbare extends Creature {
    name = "Barbare";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;

        this.text = Text;
    };

    fightEffect = function () {
        this.stat("Force").add += 2;
    };
}