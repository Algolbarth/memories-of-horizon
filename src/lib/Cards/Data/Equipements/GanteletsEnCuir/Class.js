import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class GanteletsEnCuir extends Equipment {
    name = "Gantelets en cuir";

    constructor(system) {
        super(system);

        this.init([["Or", 20]]);
        this.familles.base.push("Armure");

        this.equipStat("Actions").base = 1;

        this.text = Text;
    };
}