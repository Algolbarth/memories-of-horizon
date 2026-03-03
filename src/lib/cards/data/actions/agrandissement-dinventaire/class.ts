import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';

export class AgrandissementDInventaire extends Action {
    name = "Agrandissement d'inventaire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().zone("Inventaire").size + 1;

        this.move("Défausse");
        this.pose();
    };
};