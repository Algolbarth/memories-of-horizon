import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class BouclierEnCuir extends Equipment {
    name = "Bouclier en cuir";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Armure");

        this.equipStat("Défense").base = 5;

        this.text = Text;
    };
}