import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class ElementaireDesHerbes extends Creature {
    name = "Élémentaire des herbes";

    constructor(system: System) {
        super(system);

        this.init([["Végétal", 15]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    perishEffect = () => {
        let target = undefined;

        for (const card of this.owner().zone("Terrain").cards) {
            if (target == undefined && card instanceof Creature && card != this) {
                target = card;
            }
        }

        if (target != undefined) {
            target.stat("Force").increase(15);
            target.stat("Constitution").increase(15);
        }
    };
};