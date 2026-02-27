import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class Trident extends Equipment {
    name = "Trident";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Eau", 20]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(25);
        this.equipStat("Percée").init(50);

        this.text = Text;
    };

    killEffect = () => {
        this.owner().ressource("Eau").stock(5);
    };
};