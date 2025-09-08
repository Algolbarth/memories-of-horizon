import type { System } from '../../System/Class';
import { Action } from './Action';

export class Spell extends Action {
    constructor(system: System) {
        super(system);

        this.familles.base.push("Sort");
    }

    manaCost = function (value: number) {
        if (value < 0) {
            value = 0;
        }

        return value;
    };
}