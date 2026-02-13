import type { System } from '../../../../System/Class';
import { Druid } from '../../../Class/Druid';
import Text from './Text.svelte';

class DruideDesMontagnes extends Druid {
    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Terre", 30]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };
};

export class DruideDesMontagnesNain extends DruideDesMontagnes {
    name = "Druide des montagnes (forme nain)";
    alternative_form = "Druide des montagnes (forme ours)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Nain"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Endurance").init(10);
    };

    startPhaseEffect = () => {
        if (this.zone.name == "Terrain") {
            this.stat("Constitution").increase(10);
            this.stat("Force").increase(10);
        }
    };
};

export class DruideDesMontagnesOurs extends DruideDesMontagnes {
    name = "Druide des montagnes (forme ours)";
    alternative_form = "Druide des montagnes (forme nain)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Bête"]);

        this.trait("Rare").init(true);
        this.trait("Forme animale").init(true);

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);
    };
};