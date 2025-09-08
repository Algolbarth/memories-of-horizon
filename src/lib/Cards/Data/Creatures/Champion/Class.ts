import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Champion extends Creature {
    name = "Champion";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 20;
        this.stat("Endurance").base = 5;

        this.text = Text;

        this.stat("Force").value = function () {
            let total = this.base + this.add + this.step;
            if (this.card.type == "Créature") {
                for (const equipment of this.card.equipments) {
                    total += equipment.equipStat(this.name).value();
                }
            }

            if (this.card.system.game != undefined && this.card.zone.name == "Terrain" && this.card.slot == 0) {
                total += total;
            }

            if (total > 0) {
                return total;
            }
            else {
                return 0;
            }
        };

        this.stat("Endurance").value = function () {
            let total = this.base + this.add + this.step;
            if (this.card.type == "Créature") {
                for (const equipment of this.card.equipments) {
                    total += equipment.equipStat(this.name).value();
                }
            }

            if (this.card.system.game != undefined && this.card.zone.name == "Terrain" && this.card.slot == 0) {
                total += total;
            }

            if (total > 0) {
                return total;
            }
            else {
                return 0;
            }
        };
    };
}