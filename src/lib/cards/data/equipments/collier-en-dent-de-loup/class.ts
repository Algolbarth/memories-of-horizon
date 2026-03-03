import type { System } from '$lib/system/class';
import type { Card } from '$lib/cards/class/class';
import { Creature } from '$lib/cards/class/creature';
import { Equipment } from '$lib/cards/class/equipment';
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