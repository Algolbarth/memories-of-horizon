import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

class DruideMarchand extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Druide");

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Boeuf");
        }
    };

    useEffect = (choice) => {
        if (choice == "Humain") {
            this.transform("Druide marchand (forme humain)");
        }
        else if (choice == "Boeuf") {
            this.transform("Druide marchand (forme boeuf)");
        }
        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
}

export class DruideMarchandHumain extends DruideMarchand {
    name = "Druide marchand (forme humain)";
    otherForm = "Druide marchand (forme boeuf)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
    };

    startStepEffect = () => {
        this.owner.ressource("Or").production += 1;
    };
}

export class DruideMarchandBoeuf extends DruideMarchand {
    name = "Druide marchand (forme boeuf)";
    otherForm = "Druide marchand (forme humain)";

    constructor(system: System) {
        super(system);

        this.familles.base.push("Bête");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(25);
        this.stat("Force").init(10);
    };
}