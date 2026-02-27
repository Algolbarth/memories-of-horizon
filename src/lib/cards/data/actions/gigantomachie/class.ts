import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import Text from './text.svelte';

export class Gigantomachie extends Action {
    name = "Gigantomachie";

    constructor(system: System) {
        super(system);

        this.init([["Or", 160]]);

        this.initFamily(["Géant"]);

        this.text = Text;
    };

    canUse = () => {
        let check_inferior_level_5 = false;
        let check_superior_level_5 = false;

        let battlefield = copy(this.owner().zone("Terrain").cards);
        let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);

        for (const zone of [battlefield, adversary_battlefield]) {
            for (const card of zone) {
                if (card.level >= 5) {
                    check_superior_level_5 = true;
                }
                else {
                    check_inferior_level_5 = true;
                }

                if (check_inferior_level_5 && check_superior_level_5) {
                    return true;
                }
            }
        }

        return false;
    };

    useEffect = () => {
        let nb_level_5 = 0;

        let battlefield = copy(this.owner().zone("Terrain").cards);
        let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);

        for (const zone of [battlefield, adversary_battlefield]) {
            for (const card of zone) {
                if (card.level >= 5) {
                    nb_level_5++;
                }
            }
        }

        for (const zone of [battlefield, adversary_battlefield]) {
            for (const card of zone) {
                if (card.level < 5) {
                    card.damageByEffect(5 * nb_level_5);
                }
            }
        }

        this.move("Défausse");
        this.pose();
    };
};