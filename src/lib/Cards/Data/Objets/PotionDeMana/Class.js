import { Objet } from '../Objet';
import Text from './Text.svelte';

export class PotionDeMana extends Objet {
    name = "Potion de mana";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Potion");

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    useEffect = function (target) {
        this.owner.ressource("Mana").current += this.stat("Infusion").value();
        this.move("Défausse");
        this.pose();
    };
}