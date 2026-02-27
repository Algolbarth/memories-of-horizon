import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

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