import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';

export class Grimoire extends Equipment {
    name = "Grimoire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6]]);

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            let condition = function (card: Card) {
                if (card.familles.total().includes("Sort")) {
                    return true;
                }
                return false;
            };
            this.owner.draw(1, condition);
        }
    };
}