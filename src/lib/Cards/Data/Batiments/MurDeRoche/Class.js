import { Batiment } from '../../../Class/Batiment';

export class MurDeRoche extends Batiment {
    name = "Mur de roche";

    constructor(system) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);
        this.stat("Vie").base = 100;
        this.stat("Vie").current = 100;
    };
}