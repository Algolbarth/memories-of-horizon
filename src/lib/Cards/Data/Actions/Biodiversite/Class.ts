import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Biodiversite extends Action {
    name = "Biodiversité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35], ["Végétal", 35]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner == this.system.game.player || this.owner.zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let list = [];
        let land = copy(this.owner.zone("Terrain").cards);

        for (const card of land) {
            if (card.type == "Créature") {
                for (const family of card.families.total()) {
                    if (!list.includes(family)) {
                        list.push(family);
                    }
                }
            }
        }

        for (const card of land) {
            if (card.type == "Créature") {
                card.stat("Constitution").increase(list.length * 5);
                card.stat("Force").increase(list.length * 5);
            }
        }

        this.move("Défausse");
        this.pose();
    };
}