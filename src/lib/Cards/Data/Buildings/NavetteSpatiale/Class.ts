import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class NavetteSpatiale extends Building {
    name = "Navette spatiale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Astronef"]);

        this.stat("Constitution").init(40);

        this.text = Text;
    };

    useEffect = () => {
        this.owner?.ressource("Flux").stock(1);

        this.move("Terrain");
        this.pose();
    };

    startPhaseEffect = () => {
        if (this.zone?.name == "Terrain") {
            this.owner?.ressource("Flux").stock(1);
        }
    };
};