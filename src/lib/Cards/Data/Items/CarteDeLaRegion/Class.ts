import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

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