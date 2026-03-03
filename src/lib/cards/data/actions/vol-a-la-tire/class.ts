import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class VolALaTire extends Action {
    name = "Vol à la tire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature) {
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
                if (target == undefined && card instanceof Creature) {
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

        for (const sale of target.sale) {
            this.owner().ressource(sale.name).produce(sale.value());

            sale.turn = 0;
            sale.add = -sale.base;
        }

        this.move("Défausse");
        this.pose();
    };
};