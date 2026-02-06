import type { System } from '../../../../System/Class';
import { Knight, MountedKnight } from '../../../Class/Knight';
import Text from './Text.svelte';

export class Chevalier extends Knight {
    name = "Chevalier";
    alternative_form = "Chevalier (monté)";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Humain", "Chevalier"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);
        this.stat("Endurance").init(5);
        this.stat("Résistance").init(5);
    };
};

export class ChevalierMonte extends MountedKnight {
    name = "Chevalier (monté)";
    alternative_form = "Chevalier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Humain", "Chevalier"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(20);
        this.stat("Vitesse").init(1);

        this.text = Text;
    };
};