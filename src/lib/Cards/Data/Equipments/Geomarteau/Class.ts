import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Geomarteau extends Equipment {
    name = "Géomarteau";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75], ["Terre", 75]]);
        this.familles.base.push("Arme");

        this.addStat("Secousses", 0);
        this.stat("Secousses").condition = function () {
            return true;
        };

        this.text = Text;
    };

    fightEffect = function () {
        this.stat("Secousses").add += 3;

        let terrain = copy(this.owner.adversary().zone("Terrain").cards);
        for (const card of terrain) {
            card.damageByEffect(this.stat("Secousses").value());
        }
    };
}