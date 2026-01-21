import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class LanceurDeBouleDeFeu extends Creature {
    name = "Lanceur de boule de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Feu", 20]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);
        this.stat("Magie").init(15);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Boule de feu").add("Pile");
        }
    };
};