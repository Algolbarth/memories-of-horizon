import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';

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