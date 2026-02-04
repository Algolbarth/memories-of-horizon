import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Alchimanach extends Equipment {
    name = "Alchimanach";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let read_condition = (card: Card) => {
                if (card.isFamily("Potion")) {
                    return true;
                }
                return false;
            };
            let cards = this.owner.draw(1, read_condition);

            if (cards[0] != undefined) {
                cards[0].stat("Infusion").increase(15);
            }
        }
    };
};