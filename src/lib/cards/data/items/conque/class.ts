import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class Conque extends Item {
    name = "Conque";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().ressource("Or").production >= 5) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner().ressource("Or").decrease(5);
        this.owner().ressource("Eau").increase(5);

        this.move("Défausse");
        this.pose();
    };
};