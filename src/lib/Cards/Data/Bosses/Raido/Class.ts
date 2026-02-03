import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Boss } from '../../../Class/Boss';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Raido extends Boss {
    name = "Raido, chef brutal";

    constructor(system: System) {
        super(system);

        this.level = 2;
        this.elements.base = ["Neutre"];
        this.initFamily(["Humain"]);

        this.stat("Force").init(10);
        this.stat("Constitution").init(50);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.owner == this.owner && card instanceof Creature) {
            card.stat("Force").increase(5);
            card.stat("Constitution").increase(5);
        }
    };

    otherDieEffect = (card: Card) => {
        if (this.zone.name == "Terrain" && card.zone.name != "Pile" && card.owner != this.owner) {
            this.owner.ressource("Or").produce(card.stat("Vitalité").value());
        }
    };

    playEffect = () => {
        while (this.owner.ressource("Or").total() >= 1) {
            this.owner.ressource("Or").spend(1);
            this.stat("Force").increase(1);
            this.stat("Constitution").increase(1);
        }
    };
};