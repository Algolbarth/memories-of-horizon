import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class FauxDePaysan extends Equipment {
    name = "Faux de paysan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(10);

        this.text = Text;
    };

    killEffect = () => {
        this.owner().ressource("Or").stock(5);
    };
};