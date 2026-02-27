import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class CarteDeLaRegion extends Item {
    name = "Carte de la région";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Pile").isNotFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner().draw(this.owner().zone("Pile").size - this.owner().zone("Pile").cards.length);
        this.move("Défausse");
        this.pose();
    };
};