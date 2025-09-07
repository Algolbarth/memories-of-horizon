import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Item';
import Text from './Text.svelte';

export class Livre extends Objet {
    name = "Livre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    useEffect = function () {
        if (this.owner.totalIntelligence() >= 10) {
            this.owner.discover(2);
        }
        else {
            this.owner.discover(1);
        }
        this.move("Défausse");
        this.pose();
    };
}