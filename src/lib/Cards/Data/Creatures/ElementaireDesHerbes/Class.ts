import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ElementaireDesHerbes extends Creature {
    name = "Élémentaire des herbes";

    constructor(system: System) {
        super(system);

        this.init([["Végétal", 15]]);

        this.families.base.push("Élémentaire");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    dieEffect = () => {
        if (this.zone.name != "Pile") {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature" && card != this) {
                    target = card;
                }
            }

            if (target != undefined) {
                target.stat("Force").increase(15);
                target.stat("Constitution").increase(15);
            }
        }
    };
};