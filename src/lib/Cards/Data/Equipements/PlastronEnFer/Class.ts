import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Equipment } from '../../../Class/Equipement';
import Text from '../../../Utils/Text.svelte';

export class PlastronEnFer extends Equipment {
    name = "Plastron en fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Armure");

        this.equipStat("Vie").base = 45;

        this.text = Text;
    };

    useEffect = function (target: Creature) {
        target.equip(this);
        target.stat("Vie").current += this.equipStat("Vie").base;
        this.pose();
    };
}