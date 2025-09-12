import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class CoffreEnBois extends Item {
    name = "Coffre en bois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.draw(2);
        this.move("Défausse");
        this.pose();
    };
}