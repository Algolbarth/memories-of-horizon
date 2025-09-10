import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChefCuisinier extends Creature {
    name = "Chef cuisinier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 85]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.familles.total().includes("Nourriture") && card.owner == this.owner) {
            for (const e of card.elements.total()) {
                if (e != "Neutre") {
                    this.owner.ressource(e).current += 10;
                }
                else {
                    this.owner.ressource("Or").current += 10;
                }
            }
        }
    };
}