import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import type { Unit } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class PoeleAFrire extends Equipment {
    name = "Poêle à frire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Feu", 40]]);

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        let damage: number = 0;

        let defausse = copy(this.owner.zone("Défausse").cards);
        for (const card of defausse) {
            if (card instanceof Item && card.isFamily("Nourriture")) {
                damage += 5;
            }
        }

        defender.damageByEffect(damage);
    };
};