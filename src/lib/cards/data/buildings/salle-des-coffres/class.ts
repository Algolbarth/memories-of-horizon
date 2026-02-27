import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class SalleDesCoffres extends Building {
    name = "Salle des coffres";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    useEffect = () => {
        this.owner().getCard("Coffre en bois").add("Inventaire");
        this.owner().getCard("Coffre en bois").add("Inventaire");

        this.move("Terrain");
        this.pose();
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Coffre en bois").add("Inventaire");
            this.owner().getCard("Coffre en bois").add("Inventaire");
        }
    };
};