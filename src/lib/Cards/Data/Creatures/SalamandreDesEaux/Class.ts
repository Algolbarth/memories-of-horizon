import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SalamandreDesEaux extends Creature {
    name = "Salamandre des eaux";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    startStepEffect = () => {
        this.owner.getCard("Intoxication").add("Réserve");
    };
};