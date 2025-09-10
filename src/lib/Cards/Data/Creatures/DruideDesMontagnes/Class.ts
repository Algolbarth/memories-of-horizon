import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesMontagnes extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);
        this.familles.base.push("Druide");

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Ours");
        }
    };

    useEffect = function (choice) {
        if (choice == "Nain") {
            this.transform("Druide des montagnes (forme nain)");
        }
        else if (choice == "Ours") {
            this.transform("Druide des montagnes (forme ours)");
        }
        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
}

export class DruideDesMontagnesNain extends DruideDesMontagnes {
    name = "Druide des montagnes (forme nain)";
    otherForm = "Druide des montagnes (forme ours)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Nain");

        this.stat("Constitution").init(20);
        this.stat("Force").base = 20;
        this.stat("Endurance").base = 5;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.stat("Santé").increase(10);
            this.stat("Vitalité").increase(10);
            this.stat("Force").increase(10);
        }
    };
}

export class DruideDesMontagnesOurs extends DruideDesMontagnes {
    name = "Druide des montagnes (forme ours)";
    otherForm = "Druide des montagnes (forme nain)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(50);
        this.stat("Force").base = 50;
    };
}