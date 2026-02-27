import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class CollierEnDentDeLoup extends Equipment {
    name = "Collier en dent de loup";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Bête"]);

        this.text = Text;
    };

    otherPerishEffect = (card: Card) => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain") && card instanceof Creature && this.bearer.isAlly(card) && card.isFamily("Bête")) {
            this.bearer.stat("Force").increase(20);
        }
    };
};