import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireDesHerbes extends Creature {
    name = "Élémentaire des herbes";

    constructor(system: System) {
        super(system);

        this.init([["Végétal", 15]]);
        this.familles.base.push("Élémentaire");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    dieEffect = () => {
        let target = undefined;

        for (const card of this.owner.zone("Terrain").cards) {
            if (target == undefined && card.type == "Créature" && card != this) {
                target = card;
            }
        }

        if (target != undefined) {
            target.stat("Force").increase(5);
            target.stat("Constitution").increase(5);
        }
    };
}