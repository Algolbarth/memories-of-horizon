import { Action } from '../Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class TirHydraulique extends Action {
    name = "Tir hydraulique";

    constructor(system) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
            }
        }
    };

    useEffect = function (target) {
        if (this.owner.ressource("Eau").total() >= 15) {
            this.owner.ressource("Eau").spend(15);
            target.damage(60);
        }
        else {
            target.damage(30);
        }
        this.move("Défausse");
        this.pose();
    };
}