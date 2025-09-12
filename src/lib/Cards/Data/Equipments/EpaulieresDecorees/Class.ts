import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class EpaulieresDecorees extends Equipment {
    name = "Épaulières décorées";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Armure");

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
}