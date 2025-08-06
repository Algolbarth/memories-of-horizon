import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MinistreOndin extends Creature {
    name = "Ministre ondin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 22], ["Eau", 22]]);
        this.familles.base.push("Ondin");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.type == "Créature" && card.familles.total().includes("Ondin") && card.owner == this.owner) {
            this.owner.ressource("Eau").current += 5;
        }
    };
}