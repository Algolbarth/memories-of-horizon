import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SalamandreDesEaux extends Creature {
    name = "Salamandre des eaux";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);
        this.families.base.push("Reptile");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        this.owner.getCard("Intoxication").add("Réserve");
    };
};