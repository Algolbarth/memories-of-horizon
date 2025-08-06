import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class BagarreDeTaverne extends Action {
    name = "Bagarre de taverne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player || this.owner.zone("Terrain").cards.length > 0) {
            this.useEffect();
        }
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            card.damage(5);
            if (card.type == "Créature") {
                card.stat("Attaque").add += 10;
            }
        }
        this.move("Défausse");
        this.pose();
    };
}