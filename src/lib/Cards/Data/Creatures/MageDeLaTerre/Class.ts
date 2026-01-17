import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MageDeLaTerre extends Creature {
    name = "Mage de la terre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);

        this.families.base.push("Nain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Endurance").init(3);
        this.stat("Magie").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.families.total().includes("Sort") && card.owner == this.owner) {
            this.owner.getCard("Élémentaire de caillou").add("Réserve");
        }
    };
};