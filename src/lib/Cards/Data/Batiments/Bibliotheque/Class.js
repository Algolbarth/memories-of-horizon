import { Batiment } from '../Batiment';

export class Bibliothèque extends Batiment {
    name = "Bibliothèque";

    constructor(system) {
        super(system);

        this.init([["Or", 30]]);
        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Intelligence").base = 5;
    };
}