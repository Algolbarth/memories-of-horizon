import { Equipment } from '../Equipement';
import Text from './Text.svelte';

export class BouclierDeRoche extends Equipment {
    name = "Bouclier de roche";

    constructor(system) {
        super(system);

        this.init([["Or", 10], ["Terre", 10]]);
        this.familles.base.push("Armure");

        this.equipStat("Défense").base = 10;

        this.text = Text;
    };

    defendEffect = function () {
        this.bearer.stat("Défense").add += 2;
    };
}