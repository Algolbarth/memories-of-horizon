import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class AgrandissementDInventaire extends Action {
    name = "Agrandissement d'inventaire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.zone("Inventaire").size++;

        this.move("Défausse");
        this.pose();
    };
};