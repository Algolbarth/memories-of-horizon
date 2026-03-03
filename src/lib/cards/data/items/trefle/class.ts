import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';

export class Trefle extends Item {
    name = "Trèfle";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Végétal", 10]]);

        this.initFamily(["Plante"]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().discover(4);

        this.move("Défausse");
        this.pose();
    };
};