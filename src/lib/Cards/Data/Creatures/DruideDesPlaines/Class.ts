import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesPlaines extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.families.base.push("Druide");

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("wolf");
        }
    };

    useEffect = (choice: string) => {
        if (choice == "human") {
            this.transform("Druide des plaines (forme humain)");
        }
        else if (choice == "wolf") {
            this.transform("Druide des plaines (forme loup)");
        }

        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
};

export class DruideDesPlainesHumain extends DruideDesPlaines {
    name = "Druide des plaines (forme humain)";
    otherForm = "Druide des plaines (forme loup)";

    constructor(system: System) {
        super(system);

        this.families.base.push("Humain");

        this.stat("Constitution").init(12);
        this.stat("Force").init(12);
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.draw(2);
        }
    };
};

export class DruideDesPlainesLoup extends DruideDesPlaines {
    name = "Druide des plaines (forme loup)";
    otherForm = "Druide des plaines (forme humain)";

    constructor(system: System) {
        super(system);

        this.families.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(10);
        this.stat("Force").init(30);
    };
};