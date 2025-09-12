import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Alchimanach extends Equipment {
    name = "Alchimanach";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6]]);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let condition = (card: Card) => {
                if (card.familles.total().includes("Potion")) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, condition);
        }
    };
}