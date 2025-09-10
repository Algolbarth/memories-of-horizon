import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class Bibliothèque extends Building {
    name = "Bibliothèque";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.stat("Constitution").init(10);
        this.stat("Intelligence").base = 5;
    };
}