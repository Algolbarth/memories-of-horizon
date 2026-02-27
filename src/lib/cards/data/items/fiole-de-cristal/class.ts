import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class FioleDeCristal extends Item {
    name = "Fiole de cristal";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Inventaire").cards) {
            if (card instanceof Item && card.isFamily("Potion") && card.name != "Concoction") {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner().zone("Inventaire").cards) {
                if (target == undefined && card instanceof Item && card.isFamily("Potion") && card.name != "Concoction") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Item) => {
        this.targeting(target);

        target.stat("Infusion").increase(25);

        this.move("Défausse");
        this.pose();
    };
};