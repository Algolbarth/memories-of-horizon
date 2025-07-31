import { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';

export class Couronne extends Equipment {
    name = "Couronne";

    constructor(system) {
        super(system);

        this.init([["Or", 100]]);

        this.text = Text;
    };

    otherPoseEffect = function (card) {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain" && card.type == "Créature" && card.owner == this.bearer.owner) {
            card.stat("Attaque").add += this.bearer.level;
            card.stat("Vie").add += this.bearer.level;
            card.stat("Vie").current += this.bearer.level;
        }
    };
}