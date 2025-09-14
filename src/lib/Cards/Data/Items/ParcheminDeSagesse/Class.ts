import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class ParcheminDeSagesse extends Item {
    name = "Parchemin de sagesse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.totalIntelligence() > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner.draw(this.owner.totalIntelligence());
        this.move("Défausse");
        this.pose();
    };
}