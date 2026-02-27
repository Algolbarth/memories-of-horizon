import type { System } from '../../../../system/class';
import { Druid } from '../../../class/druid';
import Text from './text.svelte';

class DruideDesRecifs extends Druid {
    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Eau", 30]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };
};

export class DruideDesRecifsOndin extends DruideDesRecifs {
    name = "Druide des récifs (forme ondin)";
    alternative_form = "Druide des récifs (forme tortue)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Ondin"]);

        this.stat("Constitution").init(30);
        this.stat("Force").init(30);
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().ressource("Eau").increase(2);
        }
    };
};

export class DruideDesRecifsTortue extends DruideDesRecifs {
    name = "Druide des récifs (forme tortue)";
    alternative_form = "Druide des récifs (forme ondin)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Reptile"]);

        this.trait("Rare").init(true);
        this.trait("Forme animale").init(true);

        this.stat("Constitution").init(40);
        this.stat("Force").init(40);
        this.stat("Endurance").init(10);
    };
};