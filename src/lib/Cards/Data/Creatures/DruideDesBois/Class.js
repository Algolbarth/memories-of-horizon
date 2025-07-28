import { Creature } from '../Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesBois extends Creature {
    constructor(system) {
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

    constructor(system) {
        super(system);

        this.familles.base.push("Elfe");

        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;
        this.stat("Attaque").base = 20;
    };

    otherPoseEffect = function (card) {
        if (card.owner == this.owner && card.type == "Action") {
            this.stat("Vie").current += 6;
            this.stat("Vie").add += 6;
        }
    };
}

export class DruideDesBoisRenard extends DruideDesBois {
    name = "Druide des bois (forme renard)";
    otherForm = "Druide des bois (forme elfe)";

    constructor(system) {
        super(system);

        this.familles.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Vie").base = 20;
        this.stat("Vie").current = 20;
        this.stat("Attaque").base = 20;
        this.stat("Intelligence").base = 5;
    };
}