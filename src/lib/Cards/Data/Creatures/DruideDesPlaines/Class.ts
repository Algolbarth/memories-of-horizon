import type { System } from '../../../../System/Class';
import Text from './Text.svelte';
import { Druid } from '../../../Class/Druid';

class DruideDesPlaines extends Druid {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };
};

export class DruideDesPlainesHumain extends DruideDesPlaines {
    name = "Druide des plaines (forme humain)";
    alternative_form = "Druide des plaines (forme loup)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().draw(2);
        }
    };
};

export class DruideDesPlainesLoup extends DruideDesPlaines {
    name = "Druide des plaines (forme loup)";
    alternative_form = "Druide des plaines (forme humain)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Bête"]);

        this.trait("Rare").init(true);
        this.trait("Forme animale").init(true);

        this.stat("Constitution").init(10);
        this.stat("Force").init(30);
    };
};