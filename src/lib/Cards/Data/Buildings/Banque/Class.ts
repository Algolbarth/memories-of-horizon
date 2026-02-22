import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';
import type { Card } from '../../../Class';

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