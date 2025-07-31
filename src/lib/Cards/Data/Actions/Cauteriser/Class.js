import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Cauteriser extends Action {
    name = "Cautériser";

    constructor(system) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.adversary().zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature" && card.isDamaged()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        target.stat("Vie").add -= target.stat("Vie").value() - target.stat("Vie").current;
        this.move("Défausse");
        this.pose();
    };
}