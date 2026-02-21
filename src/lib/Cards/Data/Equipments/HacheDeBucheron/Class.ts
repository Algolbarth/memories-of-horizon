import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class HacheDeBucheron extends Equipment {
    name = "Hache de bûcheron";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(20);

        this.text = Text;
    };

    otherPerishEffect = (card: Card) => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain") && card.isElement("Végétal")) {
            this.bearer.stat("Force").increase(5);
        }
    };
};