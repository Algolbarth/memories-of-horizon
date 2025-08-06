import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Bombe extends Objet {
    name = "Bombe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

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

    useEffect = function (target: Unit) {
        target.damage(30);
        this.move("Défausse");
        this.pose();
    };
}