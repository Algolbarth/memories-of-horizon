import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SalamandreDesFlammes extends Creature {
    name = "Salamandre des flammes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    startStepEffect = () => {
        this.owner.getCard("Enflammer").add("Réserve");
    };
};