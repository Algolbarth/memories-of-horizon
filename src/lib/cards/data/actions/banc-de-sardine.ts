import type { System } from '$lib/system/class';
import { Action } from '$lib/cards/class/action';

export class BancDeSardine extends Action {
    name = "Banc de sardine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.initFamily(["Poisson"]);

        this.addText(`Quand posé : Génère 5 {card:Sardine} sur votre pile.`);
    };

    useEffect = () => {
        for (let i = 1; i <= 5; i++) {
            this.owner().getCard("Sardine").add("Pile");
        }

        this.move("Défausse");
        this.pose();
    };
};