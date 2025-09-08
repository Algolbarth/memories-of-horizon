import type { System } from '../../../../System/Class';
import { Batiment } from '../../../Class/Building';

export class Bibliothèque extends Batiment {
    name = "Bibliothèque";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Intelligence").base = 5;
    };
}