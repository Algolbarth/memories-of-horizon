import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';

export class Tresor extends Item {
    name = "Trésor";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().draw(5);
        this.owner().ressource("Or").produce(10);

        this.move("Défausse");
        this.pose();
    };
}