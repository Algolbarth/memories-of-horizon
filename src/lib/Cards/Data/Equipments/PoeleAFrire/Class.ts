import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import type { Unit } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class PoeleAFrire extends Equipment {
    name = "Poêle à frire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Feu", 40]]);

        this.initFamily(["Nourriture"]);

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        let damage: number = 0;

        let defausse = copy(this.owner.zone("Défausse").cards);
        for (const card of defausse) {
            if (card.isFamily("Nourriture")) {
                damage += 5;
            }
        }

        defender.damageByEffect(damage);
    };
};