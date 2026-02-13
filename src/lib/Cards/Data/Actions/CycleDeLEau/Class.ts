import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class CycleDeLEau extends Action {
    name = "Cycle de l'eau";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Eau", 35]]);

        this.text = Text;
    };

    select = () => {
        if (this.owner.ressource("Eau").total() >= 100) {
            this.useEffect(undefined);
        }
        else {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("Terrain");
            }
        }
    };

    useEffect = (choice: string | undefined) => {
        if (this.owner.ressource("Eau").total() >= 100) {
            this.owner.ressource("Eau").spend(100);

            this.owner.zone("Pile").size += 1;
            this.owner.zone("Inventaire").size += 1;
            this.owner.zone("Terrain").size += 1;
        }
        else {
            this.owner.zone(choice).size += 1;
        }

        this.move("Défausse");
        this.pose();
    };
};