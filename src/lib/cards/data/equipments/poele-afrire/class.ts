import type { System } from '../../../../system/class';
import { copy } from '../../../../utils';
import type { Unit } from '../../../class';
import { Equipment } from '../../../class/equipment';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class PoeleAFrire extends Equipment {
    name = "Poêle à frire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Feu", 20]]);

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        let damage: number = 0;

        let defausse = copy(this.owner().zone("Défausse").cards);
        for (const card of defausse) {
            if (card instanceof Item && card.isFamily("Nourriture")) {
                damage += 10;
            }
        }

        defender.damageByEffect(damage);
    };
};