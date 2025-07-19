import { copy } from '../../../../Utils';
import { Action } from '../Action';
import Text from './Text.svelte';

export class Ruee extends Action {
    name = "Ruée";

    constructor(system) {
        super(system);

        this.init([["Or", 50]]);

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
            if (card.type == "Créature") {
                card.stat("Vitesse").step += 1;
            }
        }

        this.move("Défausse");
        this.pose();
    };
}