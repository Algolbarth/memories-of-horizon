import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from '../../../Utils/DruidUse.svelte';

class DruideMarchand extends Creature {
    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("ox");
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

export class DruideMarchandHumain extends DruideMarchand {
    name = "Druide marchand (forme humain)";
    otherForm = "Druide marchand (forme boeuf)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
    };

    startStepEffect = () => {
        this.owner.ressource("Or").increase(1);
    };
};

export class DruideMarchandBoeuf extends DruideMarchand {
    name = "Druide marchand (forme boeuf)";
    otherForm = "Druide marchand (forme humain)";

    constructor(system: System) {
        super(system);

        this.initFamily(["Bête"]);

        this.trait("Rare").init(true);

        this.stat("Constitution").init(25);
        this.stat("Force").init(10);
    };
};