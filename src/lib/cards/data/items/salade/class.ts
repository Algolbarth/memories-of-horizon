import type { System } from '../../../../system/class';
import { copy } from '../../../../utils';
import { Creature } from '../../../class/creature';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class Salade extends Item {
    name = "Salade";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Végétal", 20]]);

        this.initFamily(["Nourriture", "Plante"]);

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

    canSatiety = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && card.isFullLife()) {
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

        let nb_food: number = 0;

        let defausse = copy(this.owner().zone("Défausse").cards);
        for (const card of defausse) {
            if (card.isFamily("Nourriture") && card.isFamily("Plante")) {
                nb_food++;
            }
        }

        if (!target.isDamaged()) {
            target.stat("Constitution").increase(5 * nb_food);
            target.stat("Force").increase(5 * nb_food);
        }
        else {
            target.heal(10 * nb_food);
        }

        this.move("Défausse");
        this.pose();
    };
};