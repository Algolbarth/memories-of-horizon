import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class SageDement extends Creature {
    name = "Sage dément";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35], ["Feu", 35]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);

        this.text = Text;

        this.stat("Intelligence").effect = function (total: number) {
            if (this.card.system.game != undefined && this.card.owner().zone("Pile").cards.length == 0) {
                return total + 25;
            }
            return total;
        };
    };
};