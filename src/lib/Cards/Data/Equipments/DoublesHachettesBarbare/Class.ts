import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class DoublesHachettesBarbare extends Equipment {
    name = "Doubles hachettes barbare";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(35);
        this.equipStat("Agilité").init(1);

        this.text = Text;
    };
};