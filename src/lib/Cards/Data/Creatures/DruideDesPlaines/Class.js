import { Creature } from '../Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideDesPlaines extends Creature {
    constructor(system) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Druide");

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Loup");
        }
    };

    useEffect = function (choice) {
        if (choice == "Humain") {
            this.transform("Druide des plaines (forme humain)");
        }
        else if (choice == "Loup") {
            this.transform("Druide des plaines (forme loup)");
        }
        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
}

export class DruideDesPlainesHumain extends DruideDesPlaines {
    name = "Druide des plaines (forme humain)";
    otherForm = "Druide des plaines (forme loup)";

    constructor(system) {
        super(system);

        this.familles.base.push("Humain");

        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Attaque").base = 10;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.draw(2);
        }
    };
}

export class DruideDesPlainesLoup extends DruideDesPlaines {
    name = "Druide des plaines (forme loup)";
    otherForm = "Druide des plaines (forme humain)";

    constructor(system) {
        super(system);

        this.familles.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Vie").base = 10;
        this.stat("Vie").current = 10;
        this.stat("Attaque").base = 30;
    };
}