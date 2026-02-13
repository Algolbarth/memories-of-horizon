import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class ManteauDEsquive extends Equipment {
    name = "Manteau d'esquive";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Armure"]);

        this.text = Text;
    };

    roundEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.bearer.stat("Esquive").round += 1;
        }
    };
};