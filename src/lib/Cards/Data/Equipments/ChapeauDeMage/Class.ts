import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class ChapeauDeMage extends Equipment {
    name = "Chapeau de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);

        this.initFamily(["Armure"]);

        this.equipStat("Magie").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.bearer != undefined && this.bearer.zone.name == "Terrain") {
            this.bearer.stat("Garde").fix(this.bearer.stat("Magie").value());
        }
    };
};