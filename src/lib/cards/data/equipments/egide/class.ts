import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class Egide extends Equipment {
    name = "Égide";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").value = function () {
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