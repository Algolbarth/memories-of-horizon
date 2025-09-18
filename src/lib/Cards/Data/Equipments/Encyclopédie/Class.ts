import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Encyclopedie extends Equipment {
    name = "Encyclopédie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.equipStat("Intelligence").init(2);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let condition = (card: Card) => {
                if (card.type == "Action") {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, condition);
        }
    };
}