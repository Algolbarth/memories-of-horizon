import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class EcritCalcines extends Item {
    name = "Écrits calcinés";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6], ["Feu", 6]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Pile").cards.length == 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        if (this.owner().totalIntelligence() >= 125) {
            this.owner().discover(this.owner().zone("Pile").size - this.owner().zone("Pile").cards.length);
        }
        else {
            this.owner().discover(5);
        }

        this.move("Défausse");
        this.pose();
    };
};
