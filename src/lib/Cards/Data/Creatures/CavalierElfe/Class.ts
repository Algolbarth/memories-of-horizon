import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class CavalierElfe extends Creature {
    name = "Cavalier elfe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);
        this.familles.base.push("Elfe");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 20;
        this.stat("Vitesse").base = 1;

        this.text = Text;
    };

    useEffect = function () {
        if (this.owner.totalIntelligence() >= 20) {
            this.stat("Vitesse").increase(1);
        }
        this.move("Défausse");
        this.pose();
    };
}