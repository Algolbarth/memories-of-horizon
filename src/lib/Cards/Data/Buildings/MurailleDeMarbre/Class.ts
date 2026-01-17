import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class MurailleDeMarbre extends Building {
    name = "Muraille de marbre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Terre", 50]]);
        this.stat("Constitution").init(100);
        this.stat("Endurance").init(50);
    };
};