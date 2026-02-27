import type { System } from '../../system/class';
import { Action } from './action';

export class Spell extends Action {
    constructor(system: System) {
        super(system);

        this.initFamily(["Sort"]);
    };
};