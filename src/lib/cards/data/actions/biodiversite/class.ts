import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import Text from './text.svelte';
import { Creature } from '../../../class/creature';

export class Biodiversite extends Action {
    name = "Biodiversité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35], ["Végétal", 35]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().is_player || this.owner().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let family_list: string[] = [];
        let battlefield = copy(this.owner().zone("Terrain").cards);

        for (const card of battlefield) {
            if (card instanceof Creature) {
                for (const family of card.families.total()) {
                    if (!family_list.includes(family)) {
                        family_list.push(family);
                    }
                }
            }
        }

        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Constitution").increase(family_list.length * 5);
                card.stat("Force").increase(family_list.length * 5);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};