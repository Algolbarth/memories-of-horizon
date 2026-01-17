import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Grimoire extends Equipment {
    name = "Grimoire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6]]);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let read_condition = (card: Card) => {
                if (card.families.total().includes("Sort")) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, read_condition);
        }
    };
};