import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class DefenseurDeLaCite extends Creature {
    name = "Défenseur de la cité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Terre", 15]]);

        this.initFamily(["Nain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card instanceof Building && card.owner == this.owner) {
            this.stat("Endurance").increase(2);
        }
    };
};