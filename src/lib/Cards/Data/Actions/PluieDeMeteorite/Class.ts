import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PluieDeMeteorite extends Action {
    name = "Pluie de météorite";

    constructor(system: System) {
        super(system);

        this.init([["Or", 120]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().is_player || this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("stockage");
            }
        }
        else {
            this.useEffect("damage");
        }
    };

    useEffect = (choice: string) => {
        if (choice == "stockage") {
            this.owner().ressource("Flux").stock(10);
        }
        else if (choice == "damage") {
            let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);
            for (const card of adversary_battlefield) {
                card.damageByEffect(20);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};