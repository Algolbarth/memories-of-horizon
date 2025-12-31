import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class MurDeFlammes extends Building {
    name = "Mur de flammes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);
        this.stat("Constitution").init(50);
        this.stat("Épine").init(25);
    };
};