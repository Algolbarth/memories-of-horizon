import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Trident extends Equipment {
    name = "Trident";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);
        this.familles.base.push("Arme");

        this.equipStat("Force").base = 35;
        this.equipStat("Percée").base = 50;

        this.text = Text;
    };

    killEffect = () => {
        this.owner.ressource("Eau").stock += 5;
    };
}