import type { System } from '../../../../System/Class';
import Text from './Text.svelte';
import { Druid } from '../../../Class/Druid';

class DruideDeFeu extends Druid {
    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Feu", 30]]);

        this.text = Text;
    };
};

export class DruideDeFeuGobelin extends DruideDeFeu {
    name = "Druide de feu (forme gobelin)";
    alternative_form = "Druide de feu (forme lézard)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(40);
        this.stat("Force").init(40);
    };

    startPhaseEffect = () => {
        if (this.zone.name == "Terrain") {
            this.stat("Force").increase(10);
        }
    };
};

export class DruideDeFeuLezard extends DruideDeFeu {
    name = "Druide de feu (forme lézard)";
    alternative_form = "Druide de feu (forme gobelin)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Reptile"]);

        this.trait("Rare").init(true);
        this.trait("Forme animale").init(true);

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);
        this.stat("Adresse").init(25);
    };
};