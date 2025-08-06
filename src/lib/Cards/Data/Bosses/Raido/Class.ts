import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Boss } from '../../../Class/Boss';
import Text from './Text.svelte';

export class Raido extends Boss {
    name = "Raido, chef brutal";

    constructor(system: System) {
        super(system);

        this.level = 2;
        this.elements.base = ["Neutre"];
        this.familles.base.push("Humain");

        this.stat("Attaque").base = 10;
        this.stat("Vie").base = 50;
        this.stat("Vie").current = 50;

        this.text = Text;
    };

    otherPoseEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.owner == this.owner && card.type == "Créature") {
            card.stat("Attaque").base += 5;
            card.stat("Vie").current += 5;
            card.stat("Vie").base += 5;
        }
    };

    otherDieEffect = function (card: Card) {
        if (this.zone.name == "Terrain" && card.owner != this.owner) {
            this.owner.ressource("Or").current += card.stat("Vie").value();
        }
    };

    playEffect = function () {
        while (this.owner.ressource("Or").total() >= 1) {
            this.owner.ressource("Or").spend(1);
            this.stat("Attaque").base++;
            this.stat("Vie").current++;
            this.stat("Vie").base++;
        }
    };
}