import type { System } from '../../../../System/Class';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';

export class Ecoulement extends Spell {
    name = "Écoulement";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);

        this.text = Text;
    };

    useEffect = function () {
        if (this.owner.ressource("Mana").total() >= 10) {
            this.owner.ressource("Mana").spend(10);
            this.owner.ressource("Eau").max += 5;
        }
        else {
            this.owner.ressource("Eau").max += 3;
        }

        this.move("Défausse");
        this.pose();
    };
}