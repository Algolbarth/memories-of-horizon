import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class GuerrierElfe extends Creature {
    name = "Guerrier elfe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);
        this.familles.base.push("Elfe");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;
        this.stat("Endurance").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        if (this.owner.totalIntelligence() >= 20) {
            this.stat("Santé").current += 10;
            this.stat("Santé").add += 10;
            this.stat("Force").add += 10;
            this.stat("Endurance").add += 5;
        }
        this.move("Défausse");
        this.pose();
    };
}