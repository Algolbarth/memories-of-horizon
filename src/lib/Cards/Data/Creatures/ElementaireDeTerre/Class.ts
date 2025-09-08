import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeTerre extends Creature {
    name = "Élémentaire de terre";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 15]]);
        this.familles.base.push("Élémentaire");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 10;
        this.stat("Endurance").base = 5;

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
            target.damageByEffect(30);
            this.destroy();
        }
        else {
            this.move("Terrain");
        }
        this.pose();
    };
}