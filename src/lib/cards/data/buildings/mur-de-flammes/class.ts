import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';

export class MurDeFlammes extends Building {
    name = "Mur de flammes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);

        this.stat("Constitution").init(25);
        this.stat("Épine").init(15);
    };
};