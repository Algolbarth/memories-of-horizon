import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class BarriereDeCorail extends Building {
    name = "Barrière de corail";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);

        this.stat("Constitution").init(40);
        this.stat("Régénération").init(20);
    };
};