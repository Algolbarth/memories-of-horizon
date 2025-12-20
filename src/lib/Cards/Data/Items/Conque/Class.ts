import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class Conque extends Item {
    name = "Conque";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.ressource("Or").production >= 5) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner.ressource("Or").production -= 5;
        this.owner.ressource("Eau").production += 5;
        this.move("Défausse");
        this.pose();
    };
}