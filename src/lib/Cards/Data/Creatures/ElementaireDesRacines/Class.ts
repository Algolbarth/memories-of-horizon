import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireDesRacines extends Creature {
    name = "Élémentaire des racines";

    constructor(system: System) {
        super(system);

        this.init([["Végétal", 50]]);
        this.familles.base.push("Élémentaire");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;

        this.text = Text;
    };

    dieEffect = function () {
        let target = undefined;

        for (const card of this.owner.zone("Terrain").cards) {
            if (target == undefined && card.type == "Créature") {
                target = card;
            }
        }

        if (target != undefined) {
            target.stat("Force").increase(this.stat("Force").value());
            target.stat("Constitution").increase(this.stat("Vitalité").value());
        }
    };
}