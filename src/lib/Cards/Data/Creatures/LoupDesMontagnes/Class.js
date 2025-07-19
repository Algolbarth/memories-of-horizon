import { Creature } from '../Creature';
import Text from './Text.svelte';

export class LoupDesMontagnes extends Creature {
    name = "Loup des montagnes";

    constructor(system) {
        super(system);

        this.init([["Or", 8], ["Terre", 8]]);
        this.familles.base.push("Bête");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 15;

        this.text = Text;
    };

    fightEffect = function (defender) {
        if (defender.stat("Défense").value() > 0) {
            this.stat('Attaque').add += 5;
        }
    };
}