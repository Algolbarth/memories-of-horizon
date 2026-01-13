import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesBois extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);
        this.families.base.push("Druide");

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("fox");
        }
    };

    useEffect = (choice: string) => {
        if (choice == "elf") {
            this.transform("Druide des bois (forme elfe)");
        }
        else if (choice == "fox") {
            this.transform("Druide des bois (forme renard)");
        }
        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
};

export class DruideDesBoisElfe extends DruideDesBois {
    name = "Druide des bois (forme elfe)";
    otherForm = "Druide des bois (forme renard)";

    constructor(system: System) {
        super(system);

        this.families.base.push("Elfe");

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
    };

    otherPoseEffect = (card: Card) => {
        if (card.owner == this.owner && card.type == "Action") {
            this.stat("Constitution").increase(6);
        }
    };
};

export class DruideDesBoisRenard extends DruideDesBois {
    name = "Druide des bois (forme renard)";
    otherForm = "Druide des bois (forme elfe)";

    constructor(system: System) {
        super(system);

        this.families.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Intelligence").init(5);
    };
};