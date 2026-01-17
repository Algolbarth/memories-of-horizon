import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class SageDement extends Creature {
    name = "Sage dément";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Feu", 20]]);

        this.families.base.push("Gobelin");

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);

        this.text = Text;

        this.stat("Intelligence").value = function () {
            let total = this.base + this.add + this.step + this.turn;
            if (this.card.type == "Créature") {
                for (const equipment of this.card.equipments) {
                    total += equipment.equipStat(this.name).value();
                }
            }

            if (this.card.system.game != undefined && this.card.owner.zone("Pile").cards.length == 0) {
                total += 10;
            }

            if (total < this.min) {
                total = this.min;
            }

            return total;
        };
    };
};