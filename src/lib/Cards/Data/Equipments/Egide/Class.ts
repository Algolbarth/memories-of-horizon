import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Egide extends Equipment {
    name = "Égide";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Armure");

        this.equipStat("Endurance").value = () => {
            if (this.bearer != undefined) {
                return this.bearer.stat("Protection").value() * 10;
            }
            else {
                return 0;
            }
        };

        this.text = Text;
    };
}