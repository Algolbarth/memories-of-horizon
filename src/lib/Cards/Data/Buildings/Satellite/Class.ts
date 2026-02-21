import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';

export class Satellite extends Building {
    name = "Satellite";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.initFamily(["Astronef"]);

        this.stat("Constitution").init(1);
        this.addStat("Puissance", 1);

        this.text = Text;
    };

    addEffect = (zone: string) => {
        if (zone == "Terrain") {
            this.stat('Constitution').increase(this.owner().ressource("Flux").total());
            this.stat('Puissance').increase(this.owner().ressource("Flux").total());
        }
    };

    roundEffect = () => {
        if (this.isArea("Terrain")) {
            this.adversary().zone("Terrain").cards[0].damageByEffect(this.stat("Puissance").value());
        }
    };
};