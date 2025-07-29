import type { System } from '../../../System/Class';
import { Action } from '../Actions/Action';

export class Sort extends Action {
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