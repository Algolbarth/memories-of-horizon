import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class Coquillage extends Item {
    name = "Coquillage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().ressource("Eau").production >= 5) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner().ressource("Eau").decrease(5);
        this.owner().ressource("Or").increase(5);

        this.move("Défausse");
        this.pose();
    };
};