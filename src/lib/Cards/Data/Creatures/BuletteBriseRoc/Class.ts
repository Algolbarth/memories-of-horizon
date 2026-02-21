import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class BuletteBriseRoc extends Creature {
    name = "Bulette brise-roc";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Terre", 50]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(30);
        this.stat("Force").init(15);
        this.stat("Endurance").init(25);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            this.owner().getCard("Coup de bouclier").add("Inventaire");
        }
    };
};