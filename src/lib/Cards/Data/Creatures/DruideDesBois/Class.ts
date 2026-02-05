import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from '../../../Utils/DruidUse.svelte';

class DruideDesBois extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);

        this.initFamily(["Druide"]);

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
        if (choice == "transform") {
            this.transform(this.otherForm);
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

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
    };

    otherPoseEffect = (card: Card) => {
        if (card.owner == this.owner && card instanceof Action) {
            this.stat("Constitution").increase(6);
        }
    };
};

export class DruideDesBoisRenard extends DruideDesBois {
    name = "Druide des bois (forme renard)";
    otherForm = "Druide des bois (forme elfe)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Bête"]);

        this.trait("Rare").init(true);

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);
        this.stat("Intelligence").init(5);
    };
};