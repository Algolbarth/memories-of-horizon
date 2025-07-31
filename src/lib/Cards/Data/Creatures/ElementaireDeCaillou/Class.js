import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeCaillou extends Creature {
    name = "Élémentaire de caillou";

    constructor(system) {
        super(system);

        this.init([["Terre", 3]]);
        this.familles.base.push("Élémentaire");

        this.stat("Vie").base = 3;
        this.stat("Vie").current = 3;
        this.stat("Attaque").base = 3;

        this.text = Text;
    };

    use = function () {
        this.select();
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

    useEffect = function (target) {
        if (target != undefined) {
            target.damage(5);
            this.destroy();
        }
        else {
            this.move("Terrain");
        }
        this.pose();
    };
}