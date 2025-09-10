import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MageDeLaTerre extends Creature {
    name = "Mage de la terre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Terre", 20]]);
        this.familles.base.push("Nain");

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;
        this.stat("Endurance").base = 3;
        this.stat("Magie").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.familles.total().includes("Sort") && card.owner == this.owner) {
            this.owner.getCard("Élémentaire de caillou").add("Réserve");
        }
    };
}