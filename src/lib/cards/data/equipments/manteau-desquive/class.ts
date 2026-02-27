import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class ManteauDEsquive extends Equipment {
    name = "Manteau d'esquive";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Armure"]);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.bearer != undefined && this.bearer.isArea("Terrain")) {
            this.bearer.stat("Esquive").round += 1;
        }
    };
};