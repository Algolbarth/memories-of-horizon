import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class Epouvantail extends Building {
    name = "Épouvantail";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.stat("Constitution").init(10);
        this.stat("Protection").init(2);
    };
};