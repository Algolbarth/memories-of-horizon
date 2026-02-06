import type { System } from "../../System/Class";
import Use from '../Utils/DruidUse.svelte';
import { Creature } from "./Creature";

export class Druid extends Creature {
    alternative_form: string = "";

    constructor(system: System) {
        super(system);

        this.initFamily(["Druide"]);

        this.addTrait("Forme animale", false);

        this.addTrait("Forme druidique", false);
        this.trait("Forme druidique").value = function () {
            return !this.card.trait("Forme animale").value();
        };
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("place");
        }
    };

    useEffect = (choice: string) => {
        if (choice == "transform") {
            this.transform(this.alternative_form);
        }

        this.zone.cards[this.slot].move("Terrain");
        this.pose();
    };
};