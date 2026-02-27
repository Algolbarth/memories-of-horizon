import type { System } from '../../../../system/class';
import { Building } from '../../../class/building';
import Text from './text.svelte';

export class LanceurOrbital extends Building {
    name = "Lanceur orbital";

    constructor(system: System) {
        super(system);

        this.init([["Or", 125]]);

        this.initFamily(["Astronef"]);

        this.stat("Constitution").init(50);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Satellite").add("Terrain");
        }
    };
};