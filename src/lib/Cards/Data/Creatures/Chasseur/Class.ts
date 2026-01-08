import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Chasseur extends Creature {
    name = "Chasseur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherDieEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.zone.name != "Pile" && card.type == "Créature" && card.owner == this.owner && card.familles.total().includes("Bête")) {
            this.stat("Constitution").increase(2);
            this.stat("Force").increase(5);
        }
    };
};