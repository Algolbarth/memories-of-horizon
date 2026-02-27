import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class ParcheminDeSagesse extends Item {
    name = "Parchemin de sagesse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().totalIntelligence() > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner().draw(this.owner().totalIntelligence());

        this.move("Défausse");
        this.pose();
    };
};