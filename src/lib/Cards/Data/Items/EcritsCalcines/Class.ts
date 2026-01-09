import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class EcritCalcines extends Item {
    name = "Écrits calcinés";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Feu", 8]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner?.zone("Pile").cards.length == 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        if (this.owner.totalIntelligence() >= 30) {
            this.owner?.discover(this.owner.zone("Pile").size - this.owner.zone("Pile").cards.length);
        }
        else {
            this.owner.discover(5);
        }

        this.move("Défausse");
        this.pose();
    };
};
