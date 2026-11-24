import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';

export class Gourde extends Item {
    name = "Gourde";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3], ["Eau", 2]]);

        this.getSale("Or").base = 0;
        this.getSale("Eau").base = 0;

        this.addText(`Quand se prépare dans l'inventaire : Augmente de 5 sa vente en eau.`);
    };

    canUse = () => {
        return false;
    };

    startPhaseEffect = () => {
        if (this.isArea("Inventaire")) {
            this.getSale("Eau").increase(5);
        }
    };
};