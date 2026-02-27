import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class ElementaireDeFeu extends Creature {
    name = "Élémentaire de feu";

    constructor(system: System) {
        super(system);

        this.init([["Feu", 15]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(25);
        this.stat("Force").init(25);
        this.text = Text;
    };

    perishEffect = () => {
        if (this.owner().ressource("Feu").production >= 3) {
            this.owner().ressource("Feu").decrease(3);
        }
    };
};