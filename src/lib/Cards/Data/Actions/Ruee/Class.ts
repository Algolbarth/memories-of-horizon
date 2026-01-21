import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import { Creature } from '../../../Class/Creature';

export class Ruee extends Action {
    name = "Ruée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature) {
                return true;
            }
        }
        return false;
    };

    useEffect = () => {
        let battlefield = copy(this.owner.zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Vitesse").step += 1;
            }
        }

        this.move("Défausse");
        this.pose();
    };
};