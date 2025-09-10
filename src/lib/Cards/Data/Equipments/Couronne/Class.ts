import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class Couronne extends Equipment {
    name = "Couronne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.bearer.owner) {
            card.stat("Force").increase(this.bearer.level);
            card.stat("Santé").increase(this.bearer.level);
            card.stat("Vitalité").increase(this.bearer.level);
        }
    };
}