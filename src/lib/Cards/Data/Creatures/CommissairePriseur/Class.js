import { copy } from '../../../../Utils';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class CommissairePriseur extends Creature {
    name = "Commissaire priseur";

    constructor(system) {
        super(system);

        this.init([["Or", 105]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            let hand = copy(this.owner.zone("Main").cards);
            for (const card of hand) {
                card.getVente("Or").add += 10;
            }
        }
    };
}