import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

export class OursForestier extends Creature {
    name = "Ours forestier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);
        this.familles.base.push("Bête");

        this.stat("Vie").base = 50;
        this.stat("Vie").current = 50;
        this.stat("Attaque").base = 30;
    };
}