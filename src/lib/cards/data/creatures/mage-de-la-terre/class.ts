import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class MageDeLaTerre extends Creature {
    name = "Mage de la terre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);

        this.initFamily(["Nain", "Mage"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Endurance").init(3);
        this.stat("Magie").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isFamily("Sort") && this.isAlly(card)) {
            this.owner().getCard("Élémentaire de caillou").add("Inventaire");
        }
    };
};