import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class PlastronEnCuir extends Equipment {
    name = "Plastron en cuir";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Armure");

        this.equipStat("Vie").base = 8;

        this.text = Text;
    };

    useEffect = function (target) {
        target.equip(this);
        target.stat("Vie").current += this.equipStat("Vie").base;
        this.pose();
    };
}