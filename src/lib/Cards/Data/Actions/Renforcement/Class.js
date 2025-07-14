import { Action } from '../Action.js';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Renforcement extends Action {
    name = "Renforcement";

    constructor(system) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            if (this.owner.zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.zone("Terrain").cards[0]);
            }
        }
    };

    useEffect = function (target) {
        target.stat("Vie").add += 15;
        target.stat("Vie").current += 15;
        this.move("Défausse");
        this.pose();
    };
}