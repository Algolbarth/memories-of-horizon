import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';
import type { Card } from '../../../class';

export class Banque extends Building {
    name = "Banque";

    constructor(system: System) {
        super(system);

        this.init([["Or", 80]]);

        this.stat("Constitution").init(50);

        this.addStat("Intérêts", 5);

        this.text = Text;
    };

    otherSellEffect = (card: Card) => {
        if (this.isArea("Terrain") && this.isAlly(card)) {
            this.stat("Intérêts").increase(1);

            this.getSale("Or").increase(5);
        }
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().ressource("Or").produce(this.stat("Intérêts").value());
        }
    };
};