import { Batiment } from '../../../Class/Batiment';

export class MurDeBrique extends Batiment {
    name = "Mur de brique";

    constructor(system) {
        super(system);

        this.init([["Or", 10]]);
        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;
    };
}