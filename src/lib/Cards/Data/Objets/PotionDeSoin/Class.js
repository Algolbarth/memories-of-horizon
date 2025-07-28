import { Objet } from '../Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PotionDeSoin extends Objet {
    name = "Potion de soin";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Potion");

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature" && card.stat("Vie").current < card.stat("Vie").value()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        target.heal(this.stat("Infusion").value() * 2);
        this.move("Défausse");
        this.pose();
    };
}