import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class DefenseurDeLaCite extends Creature {
    name = "Défenseur de la cité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);
        this.familles.base.push("Nain");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;
        this.stat("Endurance").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Bâtiment" && card.owner == this.owner) {
            this.stat("Endurance").increase(2);
        }
    };
}