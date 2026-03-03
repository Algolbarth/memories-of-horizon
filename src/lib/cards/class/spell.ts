import type { System } from '$lib/system/class';
import { Action } from './action';

export class Spell extends Action {
    constructor(system: System) {
        super(system);

        this.initFamily(["Sort"]);
    };
};