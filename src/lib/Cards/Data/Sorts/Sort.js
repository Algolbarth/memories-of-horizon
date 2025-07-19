import { Action } from '../Actions/Action';

export class Sort extends Action {
    constructor(system) {
        super(system);

        this.familles.base.push("Sort");
    }

    manaCost = function (value) {
        if (value < 0) {
            value = 0;
        }

        return value;
    };
}