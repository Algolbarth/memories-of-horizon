import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Pelle extends Equipment {
    name = "Pelle";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Terre", 18]]);

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let condition = function (card: Card) {
                if (card.elements.total().includes("Terre")) {
                    return true;
                }
                return false;
            }
            let cards = this.owner.discover(1, condition);
            this.owner.ressource("Terre").current += cards[0].level;
        }
    };
}