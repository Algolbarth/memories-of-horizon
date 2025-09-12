import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDeFeu extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);
        this.familles.base.push("Druide");

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Gobelin");
        }
    };

    useEffect = (choice) => {
        if (choice == "Gobelin") {
            this.transform("Druide de feu (forme gobelin)");
        }
        else if (choice == "Lézard") {
            this.transform("Druide de feu (forme lézard)");
        }
        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
}

export class DruideDeFeuGobelin extends DruideDeFeu {
    name = "Druide de feu (forme gobelin)";
    otherForm = "Druide de feu (forme lézard)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Gobelin");

        this.stat("Constitution").init(35);
        this.stat("Force").base = 35;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.stat("Force").increase(10);
        }
    };
}

export class DruideDeFeuLezard extends DruideDeFeu {
    name = "Druide de feu (forme lézard)";
    otherForm = "Druide de feu (forme gobelin)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Reptile");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(20);
        this.stat("Force").base = 20;
        this.stat("Adresse").base = 25;
    };
}