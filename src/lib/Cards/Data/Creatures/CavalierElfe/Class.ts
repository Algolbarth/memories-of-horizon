import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class CavalierElfe extends Creature {
    name = "Cavalier elfe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.families.base.push("Elfe");

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Vitesse").init(1);

        this.text = Text;
    };

    useEffect = () => {
        if (this.owner.totalIntelligence() >= 20) {
            this.stat("Vitesse").increase(1);
        }

        this.move("Défausse");
        this.pose();
    };
};