import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Negociant extends Creature {
    name = "Négociant";

    constructor(system) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            let check = false;

            for (const card of this.owner.zone("Boutique").cards) {
                if (check == false && card.getCout("Or").value() > 0) {
                    check = true;
                }
            }

            if (check) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined);
            }
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Boutique").cards) {
                if (target == undefined && card.getCout("Or") > 0) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
            else {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = function (target) {
        if (target != undefined) {
            target.getCout("Or").add -= 10;
        }
        this.move("Terrain");
        this.pose();
    };
}