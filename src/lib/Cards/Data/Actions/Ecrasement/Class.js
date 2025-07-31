import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Ecrasement extends Action {
    name = "Écrasement";

    constructor(system) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    select = function () {
        let check = false;

        for (const card of this.owner.zone("Terrain").cards) {
            if (!check && card.type == "Créature") {
                check = true;
            }
        }

        if (check) {
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
        }
    };

    useEffect = function (target) {
        let value = 0;

        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && value < card.stat("Vie").value()) {
                value = card.stat("Vie").value();
            }
        }

        target.damage(value);

        this.move("Défausse");
        this.pose();
    };
}