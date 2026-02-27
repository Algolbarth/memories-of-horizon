import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';

export class OursForestier extends Creature {
    name = "Ours forestier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(50);
        this.stat("Force").init(30);
    };
};