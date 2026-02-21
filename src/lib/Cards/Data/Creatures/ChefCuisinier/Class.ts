import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChefCuisinier extends Creature {
    name = "Chef cuisinier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 85]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Terrain") && card.isFamily("Nourriture") && this.isAlly(card)) {
            for (const e of card.elements.total()) {
                if (e != "Neutre") {
                    this.owner().ressource(e).produce(10);
                }
                else {
                    this.owner().ressource("Or").produce(10);
                }
            }
        }
    };
};