import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeCaillou extends Creature {
    name = "Élémentaire de caillou";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 3]]);
        this.familles.base.push("Élémentaire");

        this.stat("Constitution").init(3);
        this.stat("Force").base = 3;

        this.text = Text;
    };

    canUse = function () {
        if (!this.owner.zone("Terrain").isFull() || this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect(undefined);
            }
        }
        else {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = function (target: Unit) {
        if (target != undefined) {
            target.damageByEffect(6);
            this.destroy();
        }
        else {
            this.move("Terrain");
        }
        this.pose();
    };
}