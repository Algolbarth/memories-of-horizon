import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';

export class Bibliothèque extends Building {
    name = "Bibliothèque";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35]]);

        this.stat("Constitution").init(20);
        this.stat("Intelligence").init(5);
    };
};