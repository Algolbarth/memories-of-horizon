import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class AncienSerpent extends Creature {
    name = "Ancien serpent";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.initFamily(["Reptile"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Mue").add("Inventaire");
        }
    };
};