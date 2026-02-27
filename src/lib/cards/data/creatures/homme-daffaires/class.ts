import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class HommeDAffaires extends Creature {
    name = "Homme d'affaires";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherSellEffect = (card: Card) => {
        if (this.isArea("Terrain") && this.isAlly(card)) {
            this.owner().ressource("Or").produce(5);
        }
    };
};