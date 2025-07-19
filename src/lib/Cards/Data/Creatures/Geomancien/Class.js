import { Creature } from '../Creature';
import Text from './Text.svelte';

export class Geomancien extends Creature {
    name = "Geomancien";

    constructor(system) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);
        this.familles.base.push("Nain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;
        this.stat("Défense").base = 3;

        this.text = Text;
    };

    otherPoseEffect = function (card) {
        if (this.zone.name == "Terrain" && card.elements.total().includes("Terre") && card.owner == this.owner) {
            this.stat("Défense").add += 2;
        }
    };
}