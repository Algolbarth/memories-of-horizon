import type { System } from '$lib/system/class';
import { Creature } from '$lib/cards/class/creature';

export class AnemoneDeMer extends Creature {
    name = "Anémone de mer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);

        this.stat("Constitution").init(10);
        this.stat("Initiative").init(0);
        this.stat("Maîtrise").init(0);

        this.addText(`Au début d'une manche : Si sur le terrain : Génère {card:Poisson-clown} sur votre terrain.`);
    };

    roundEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Poisson-clown").add("Terrain");
        }
    };
};