import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class PlastronEnPlatine extends Equipment {
    name = "Plastron en platine";

    constructor(system) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Armure");

        this.equipStat("Vie").base = 150;

        this.text = Text;
    };

    useEffect = function (target) {
        target.equip(this);
        target.stat("Vie").current += this.equipStat("Vie").base;
        this.pose();
    };
}