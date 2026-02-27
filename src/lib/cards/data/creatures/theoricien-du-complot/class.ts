import type { System } from '../../../../system/class';
import { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class TheoricienDuComplot extends Creature {
    name = "Théoricien du complot";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Feu", 12]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);

        this.text = Text;
    };

    otherMillEffect = (card: Card) => {
        if (this.isArea("Terrain") && this.isAlly(card)) {
            this.owner().ressource("Or").produce(1);
            this.owner().ressource("Feu").produce(1);
        }
    };
};