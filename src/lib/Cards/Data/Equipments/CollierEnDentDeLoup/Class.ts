import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class CollierEnDentDeLoup extends Equipment {
    name = "Collier en dent de loup";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.families.base.push("Bête");

        this.text = Text;
    };

    otherDieEffect = (card: Card) => {
        if (this.bearer != undefined && card.zone.name != "Pile" && this.bearer.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.bearer.owner && card.families.total().includes("Bête")) {
            this.bearer.stat("Force").increase(20);
        }
    };
};