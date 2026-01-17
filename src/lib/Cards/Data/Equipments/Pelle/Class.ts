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

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let read_condition = (card: Card) => {
                if (card.elements.total().includes("Terre")) {
                    return true;
                }
                return false;
            };
            this.owner.discover(1, read_condition);
            this.owner.ressource("Terre").current += 10;
        }
    };
};