import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import { Creature } from '../../../Class/Creature';

export class ForceDeLaFamille extends Action {
    name = "Force de la famille";

    constructor(system: System) {
        super(system);

        this.init([["Or", 65]]);

        this.text = Text;
    };

    canUse = () => {
        let family_list: string[] = [];
        let battlefield = copy(this.owner.zone("Terrain").cards);

        for (const card of battlefield) {
            if (card instanceof Creature) {
                for (const family of card.families.total()) {
                    if (!family_list.includes(family)) {
                        family_list.push(family);
                    }
                }
            }
        }

        for (const family of family_list) {
            let check: boolean = true;

            for (const card of battlefield) {
                if (card instanceof Creature) {
                    if (!card.families.total().includes(family)) {
                        check = false;
                    }
                }
            }

            if (check) {
                return true;
            }
        }

        return false;
    };

    useEffect = () => {
        let nb_creature = 0;
        let battlefield = copy(this.owner.zone("Terrain").cards);

        for (const card of battlefield) {
            if (card instanceof Creature) {
                nb_creature++;
            }
        }

        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Constitution").increase(nb_creature);
                card.stat("Force").increase(nb_creature);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};