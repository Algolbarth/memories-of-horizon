import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class TremblementDeTerre extends Action {
    name = "Tremblement de terre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player || this.owner.adversary().zone("Terrain").cards.length > 0) {
            this.useEffect();
        }
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        terrain = terrain.concat(copy(this.owner.adversary().zone("Terrain").cards));

        for (const card of terrain) {
            card.damageByEffect(10);
        }
        
        this.move("Défausse");
        this.pose();
    };
}