import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class ChapeauDeMage extends Equipment {
    name = "Chapeau de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.initFamily(["Armure", "Mage"]);

        this.equipStat("Magie").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.bearer.stat("Garde").fix(this.bearer.stat("Magie").value());
        }
    };
};