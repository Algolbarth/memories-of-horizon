import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class ElementaireDesRacines extends Creature {
    name = "Élémentaire des racines";

    constructor(system: System) {
        super(system);

        this.init([["Végétal", 50]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

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
            target.stat("Force").increase(this.stat("Force").value());
            target.stat("Constitution").increase(this.stat("Vitalité").value());
        }
    };
};