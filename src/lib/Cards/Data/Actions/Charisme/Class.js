import { Action } from '../Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Charisme extends Action {
    name = "Charisme";

    constructor(system) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        target.stat("Attaque").add += 10 * target.stat("Protection").value();
        target.stat("Vie").add += 10 * target.stat("Protection").value();
        target.stat("Vie").current += 10 * target.stat("Protection").value();
        this.move("Défausse");
        this.pose();
    };
}