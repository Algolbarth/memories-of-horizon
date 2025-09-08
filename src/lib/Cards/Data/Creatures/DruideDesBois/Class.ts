import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesBois extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);
        this.familles.base.push("Druide");

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Renard");
        }
    };

    useEffect = function (choice) {
        if (choice == "Elfe") {
            this.transform("Druide des bois (forme elfe)");
        }
        else if (choice == "Renard") {
            this.transform("Druide des bois (forme renard)");
        }
        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
}

export class DruideDesBoisElfe extends DruideDesBois {
    name = "Druide des bois (forme elfe)";
    otherForm = "Druide des bois (forme renard)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Elfe");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 20;
    };

    otherPoseEffect = function (card: Card) {
        if (card.owner == this.owner && card.type == "Action") {
            this.stat("Santé").current += 6;
            this.stat("Santé").increase(6);
        }
    };
}

export class DruideDesBoisRenard extends DruideDesBois {
    name = "Druide des bois (forme renard)";
    otherForm = "Druide des bois (forme elfe)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 20;
        this.stat("Intelligence").base = 5;
    };
}