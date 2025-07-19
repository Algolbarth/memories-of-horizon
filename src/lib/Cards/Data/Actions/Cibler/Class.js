import { Action } from '../Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Cibler extends Action {
    name = "Cibler";

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
            let target = undefined;

            for (const card of this.owner.adversary().zone("Terrain").cards) {
                if (target == undefined) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        target.stat("Protection").add++;
        this.move("Défausse");
        this.pose();
    };
}