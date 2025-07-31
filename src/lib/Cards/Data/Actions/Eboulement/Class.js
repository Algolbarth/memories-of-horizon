import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Eboulement extends Action {
    name = "Éboulement";

    constructor(system) {
        super(system);

        this.init([["Or", 10], ["Terre", 10]]);

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
        if (target.stat("Étourdissement").value() >= 1) {
            target.damage(20);
        }
        else {
            target.stat("Étourdissement").fix(1);
        }
        this.move("Défausse");
        this.pose();
    };
}