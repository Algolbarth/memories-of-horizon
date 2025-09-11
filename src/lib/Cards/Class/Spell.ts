import type { System } from '../../System/Class';
import { Action } from './Action';

export class Spell extends Action {
    constructor(system: System) {
        super(system);

        this.familles.base.push("Sort");
    }
}