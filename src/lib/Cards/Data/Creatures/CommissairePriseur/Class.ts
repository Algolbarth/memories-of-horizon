import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class CommissairePriseur extends Creature {
    name = "Commissaire priseur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            let reserve = copy(this.owner().zone("Inventaire").cards);
            for (const card of reserve) {
                card.getSale("Or").increase(10);
            }
        }
    };
};