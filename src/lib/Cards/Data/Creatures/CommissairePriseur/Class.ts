import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class CommissairePriseur extends Creature {
    name = "Commissaire priseur";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            let hand = copy(this.owner.zone("Main").cards);
            for (const card of hand) {
                card.getSale("Or").increase(10);
            }
        }
    };
}