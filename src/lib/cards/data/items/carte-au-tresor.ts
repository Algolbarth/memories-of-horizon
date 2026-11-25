import type { System } from '$lib/system/class';
import { Item } from '$lib/cards/class/item';

export class CarteAuTresor extends Item {
    name = "Carte au trésor";

    constructor(system: System) {
        super(system);

        this.init([["Or", 75]]);

        this.addText(`Quand posé : Crée autant de {card:Trésor} que nécessaire pour remplir votre pile.`);
    };

    canUse = () => {
        if (this.owner().zone("Pile").isNotFull()) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let nb_item: number = this.owner().zone("Pile").getRemaining();
        for (let i = 0; i < nb_item; i++) {
            this.owner().getCard("Trésor").add("Pile");
        }

        this.move("Défausse");
        this.pose();
    };
};