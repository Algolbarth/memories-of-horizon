import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class EpaulieresDecorees extends Equipment {
    name = "Épaulières décorées";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Armure"]);

        this.equipStat("Résistance").value = function () {
            if (this.card.bearer != undefined) {
                return this.card.bearer.stat("Protection").value() * 10;
            }
            else {
                return 0;
            }
        };

        this.text = Text;
    };
};