import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class PeauDOurs extends Equipment {
    name = "Peau d'ours";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.familles.base.push("Armure");

        this.familles.base.push("Bête");

        this.text = Text;
    };

    otherDieEffect = function (card: Card) {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.bearer.owner && card.familles.total().includes("Bête")) {
            this.bearer.stat("Vie").add += 10;
            this.bearer.stat("Vie").add += 10;
        }
    };
}