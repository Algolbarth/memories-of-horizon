import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesRecifs extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);

        this.families.base.push("Druide");

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
        if (choice == "merfolk") {
            this.transform("Druide des récifs (forme ondin)");
        }
        else if (choice == "turtle") {
            this.transform("Druide des récifs (forme tortue)");
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

        this.families.base.push("Ondin");

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);
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

        this.families.base.push("Reptile");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(35);
        this.stat("Force").init(35);
        this.stat("Endurance").init(10);
    };
};