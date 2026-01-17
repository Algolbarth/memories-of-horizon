import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesMontagnes extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Terre", 25]]);

        this.families.base.push("Druide");

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("bear");
        }
    };

    useEffect = (choice) => {
        if (choice == "dwarf") {
            this.transform("Druide des montagnes (forme nain)");
        }
        else if (choice == "bear") {
            this.transform("Druide des montagnes (forme ours)");
        }
        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
};

export class DruideDesMontagnesNain extends DruideDesMontagnes {
    name = "Druide des montagnes (forme nain)";
    otherForm = "Druide des montagnes (forme ours)";

    constructor(system: System) {
        super(system);

        this.families.base.push("Nain");

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Endurance").init(5);
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.stat("Constitution").increase(10);
            this.stat("Force").increase(10);
        }
    };
};

export class DruideDesMontagnesOurs extends DruideDesMontagnes {
    name = "Druide des montagnes (forme ours)";
    otherForm = "Druide des montagnes (forme nain)";

    constructor(system: System) {
        super(system);

        this.families.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);
    };
};