import type { System } from '../../../../system/class';
import { Druid } from '../../../class/druid';
import Text from './text.svelte';

class DruideMarchand extends Druid {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };
};

export class DruideMarchandHumain extends DruideMarchand {
    name = "Druide marchand (forme humain)";
    alternative_form = "Druide marchand (forme boeuf)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
    };

    startPhaseEffect = () => {
        this.owner().ressource("Or").increase(1);
    };
};

export class DruideMarchandBoeuf extends DruideMarchand {
    name = "Druide marchand (forme boeuf)";
    alternative_form = "Druide marchand (forme humain)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Bête"]);

        this.trait("Rare").init(true);
        this.trait("Forme animale").init(true);

        this.stat("Constitution").init(25);
        this.stat("Force").init(10);
    };
};