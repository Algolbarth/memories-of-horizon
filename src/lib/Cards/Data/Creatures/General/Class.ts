import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class General extends Creature {
    name = "Général";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            let terrain = copy(this.owner.zone("Terrain").cards);
            for (const card of terrain) {
                if (card.type == "Créature") {
                    card.stat("Force").add += 5;
                    card.stat("Santé").current += 5;
                    card.stat("Santé").add += 5;
                }
            }
        }
    };
}