import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class WyverneMarine extends Creature {
    name = "Wyverne marine";

    constructor(system: System) {
        super(system);

        this.level = 3;
        this.init([["Or", 30], ["Eau", 30]]);
        this.familles.base.push("Reptile");

        this.stat("Constitution").init(20);
        this.stat("Force").base = 20;

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.zone.name == "Pile" && card.owner == this.owner && card.elements.total().includes("Eau")) {
            this.costReduce(6);
        }
    };

    use = () => {
        this.owner.ressource("Eau").current += 10;
        this.move("Terrain");
        this.pose();
    };
}