import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class PeauDOurs extends Equipment {
    name = "Peau d'ours";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Armure", "Bête"]);

        this.text = Text;
    };

    otherDieEffect = (card: Card) => {
        if (this.bearer != undefined && card.zone.name != "Pile" && this.bearer.zone.name == "Terrain" && card instanceof Creature && card.owner == this.bearer.owner && card.isFamily("Bête")) {
            this.bearer.stat("Constitution").increase(10);
        }
    };
};