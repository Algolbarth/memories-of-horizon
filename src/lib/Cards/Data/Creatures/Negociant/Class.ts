import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Negociant extends Creature {
    name = "Négociant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            let check = false;

            for (const card of this.owner.zone("Boutique").cards) {
                if (check == false && card.getCost("Or").value() > 0) {
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
                if (target == undefined && card.getCost("Or") > 0) {
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

    useEffect = function (target: Card) {
        if (target != undefined) {
            target.getCost("Or").add -= 10;
        }
        this.move("Terrain");
        this.pose();
    };
}