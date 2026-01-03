import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SalamandreDesFlammes extends Creature {
    name = "Salamandre des flammes";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        this.owner.getCard("Enflammer").add("Réserve");
    };
};