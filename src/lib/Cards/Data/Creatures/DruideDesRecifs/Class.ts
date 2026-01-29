import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from '../../../Utils/DruidUse.svelte';

class DruideDesRecifs extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Eau", 30]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("turtle");
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

export class DruideDesRecifsOndin extends DruideDesRecifs {
    name = "Druide des récifs (forme ondin)";
    otherForm = "Druide des récifs (forme tortue)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Ondin"]);

        this.stat("Constitution").init(30);
        this.stat("Force").init(30);
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Eau").production += 2;
        }
    };
};

export class DruideDesRecifsTortue extends DruideDesRecifs {
    name = "Druide des récifs (forme tortue)";
    otherForm = "Druide des récifs (forme ondin)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Reptile"]);

        this.trait("Rare").base = true;

        this.stat("Constitution").init(40);
        this.stat("Force").init(40);
        this.stat("Endurance").init(10);
    };
};