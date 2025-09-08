import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class FeuDeCamp extends Building {
    name = "Feu de camp";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            if (this.slot > 0 && this.zone.cards[this.slot - 1].type == "Créature") {
                this.zone.cards[this.slot - 1].heal(5);
            }
            if (this.slot < this.zone.cards.length - 1 && this.zone.cards[this.slot + 1].type == "Créature") {
                this.zone.cards[this.slot + 1].heal(5);
            }
        }
    };
}