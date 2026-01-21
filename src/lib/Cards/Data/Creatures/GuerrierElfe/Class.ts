import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class GuerrierElfe extends Creature {
    name = "Guerrier elfe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    useEffect = () => {
        if (this.owner.totalIntelligence() >= 20) {
            this.stat("Constitution").increase(10);
            this.stat("Force").increase(10);
        }

        this.move("Défausse");
        this.pose();
    };
};