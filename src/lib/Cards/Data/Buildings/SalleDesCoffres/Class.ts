import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class SalleDesCoffres extends Building {
    name = "Salle des coffres";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.getCard("Coffre en bois").add("Réserve");
        this.owner.getCard("Coffre en bois").add("Réserve");

        this.move("Terrain");
        this.pose();
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Coffre en bois").add("Réserve");
            this.owner.getCard("Coffre en bois").add("Réserve");
        }
    };
};