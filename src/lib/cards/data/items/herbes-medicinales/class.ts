import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class HerbesMedicinales extends Item {
    name = "Herbes médicinales";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Végétal", 12]]);

        this.initFamily(["Plante"]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && card.isDamaged()) {
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

            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.isDamaged()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        this.targeting(target);

        target.heal(50);

        this.move("Défausse");
        this.pose();
    };
};