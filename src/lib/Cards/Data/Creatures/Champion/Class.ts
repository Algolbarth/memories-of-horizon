import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Champion extends Creature {
    name = "Champion";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Endurance").init(5);

        this.text = Text;

        this.stat("Force").value = function () {
            let total = this.base + this.add + this.step + this.turn;
            if (this.card.type == "Créature") {
                for (const equipment of this.card.equipments) {
                    total += equipment.equipStat(this.name).value();
                }
            }

            if (this.card.system.game != undefined && this.card.zone.name == "Terrain" && this.card.slot == 0) {
                total = total * 2;
            }

            if (total < this.min) {
                total = this.min;
            }

            return total;
        };

        this.stat("Endurance").value = function () {
            let total = this.base + this.add + this.step + this.turn;
            if (this.card.type == "Créature") {
                for (const equipment of this.card.equipments) {
                    total += equipment.equipStat(this.name).value();
                }
            }

            if (this.card.system.game != undefined && this.card.zone.name == "Terrain" && this.card.slot == 0) {
                total = total * 2;
            }

            if (total < this.min) {
                total = this.min;
            }

            return total;
        };
    };
};