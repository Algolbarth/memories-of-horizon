import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Couronne extends Equipment {
    name = "Couronne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain" && card instanceof Creature && card.owner == this.bearer.owner) {
            card.stat("Constitution").increase(this.bearer.level);
            card.stat("Force").increase(this.bearer.level);
        }
    };
};