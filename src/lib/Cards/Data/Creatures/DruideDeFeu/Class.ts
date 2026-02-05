import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from '../../../Utils/DruidUse.svelte';

class DruideDeFeu extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Feu", 30]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("place");
        }
    };

    useEffect = (choice: string) => {
        if (choice == "transform") {
            this.transform(this.otherForm);
        }

        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
};

export class DruideDeFeuGobelin extends DruideDeFeu {
    name = "Druide de feu (forme gobelin)";
    otherForm = "Druide de feu (forme lézard)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(40);
        this.stat("Force").init(40);
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.stat("Force").increase(10);
        }
    };
};

export class DruideDeFeuLezard extends DruideDeFeu {
    name = "Druide de feu (forme lézard)";
    otherForm = "Druide de feu (forme gobelin)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Reptile"]);

        this.trait("Rare").init(true);

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);
        this.stat("Adresse").init(25);
    };
};