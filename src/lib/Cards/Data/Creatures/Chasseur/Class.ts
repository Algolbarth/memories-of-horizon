import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Chasseur extends Creature {
    name = "Chasseur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherDieEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.zone.name != "Pile" && card instanceof Creature && card.owner == this.owner && card.isFamily("Bête")) {
            this.stat("Constitution").increase(3);
            this.stat("Force").increase(3);
        }
    };
};