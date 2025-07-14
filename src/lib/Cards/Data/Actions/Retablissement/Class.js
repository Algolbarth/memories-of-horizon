import { Action } from '../Action.js';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Retablissement extends Action {
    name = "Rétablissement";

    constructor(system) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.stat("Vie").current < card.stat("Vie").value()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        target.healFull();
        this.move("Défausse");
        this.pose();
    };
}