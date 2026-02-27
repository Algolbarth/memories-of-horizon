import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class CavalierElfe extends Creature {
    name = "Cavalier elfe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);

        this.initFamily(["Elfe"]);

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Vitesse").init(1);

        this.text = Text;
    };

    useEffect = () => {
        if (this.owner().totalIntelligence() >= 20) {
            this.stat("Vitesse").increase(1);
        }

        this.move("Défausse");
        this.pose();
    };
};