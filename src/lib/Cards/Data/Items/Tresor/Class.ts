import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class Tresor extends Item {
    name = "Trésor";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.draw(5);
        this.owner.ressource("Or").current += 10;
        this.move("Défausse");
        this.pose();
    };
}