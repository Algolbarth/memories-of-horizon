import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Building } from '$lib/cards/class/building';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';

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
        if (this.isArea("Terrain") && card instanceof Building && this.isAlly(card)) {
            this.stat("Endurance").increase(2);
        }
    };
};