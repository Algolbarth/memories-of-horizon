import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';

export class CoffreEnBois extends Item {
    name = "Coffre en bois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().draw(2);

        this.move("Défausse");
        this.pose();
    };
};