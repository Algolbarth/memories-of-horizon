import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

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

    dieEffect = () => {
        if (this.zone.name != "Pile" && this.owner.ressource("Feu").production >= 3) {
            this.owner.ressource("Feu").production -= 3;
        }
    };
};