import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class CommissairePriseur extends Creature {
    name = "Commissaire priseur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);
        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            let reserve = copy(this.owner.zone("Réserve").cards);
            for (const card of reserve) {
                card.getSale("Or").increase(10);
            }
        }
    };
}