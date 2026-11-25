import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';

export class Requisition extends Action {
    name = "Réquisition";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.addText([
            `Quand posé : Réduit de 1 la taille de votre inventaire.`,
            `Augmente de 1 la taille de votre terrain.`]);
    };

    canUse = () => {
        if (this.owner().zone("Inventaire").getSize() > 1) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        this.owner().zone("Inventaire").decrease(1);
        this.owner().zone("Terrain").increase(1);

        this.move("Défausse");
        this.pose();
    };
};
