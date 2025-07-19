import { copy } from '../../../../Utils';
import { Objet } from '../Objet';
import Text from './Text.svelte';

export class Blason extends Objet {
    name = "Blason";

    constructor(system) {
        super(system);

        this.init([["Or", 30]]);

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
            card.stat("Défense").add += 3;
        }
        this.move("Défausse");
        this.pose();
    };
}