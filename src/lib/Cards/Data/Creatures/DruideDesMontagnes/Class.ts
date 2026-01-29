import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from '../../../Utils/DruidUse.svelte';

class DruideDesMontagnes extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Terre", 30]]);

        this.initFamily(["Druide"]);

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

    useEffect = (choice: string) => {
        if (choice == "transform") {
            this.transform(this.otherForm);
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

        this.initFamily(["Nain"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Endurance").init(10);
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

        this.initFamily(["Bête"]);

        this.trait("Rare").base = true;

        this.stat("Constitution").init(50);
        this.stat("Force").init(50);
    };
};